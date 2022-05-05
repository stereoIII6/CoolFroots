const {MemoryDatastore} = require('interface-datastore');
const IPFS = require('ipfs-core');
const {
	createRepo,
	locks: {memory: memoryLock}
} = require('ipfs-repo');
const rawCodec = require('multiformats/codecs/raw');

const ipfs = IPFS.create({
	repo: createRepo(
		'/dev/null',
		() => rawCodec,
		{
			blocks: new MemoryDatastore(),
			datastore: new MemoryDatastore(),
			keys: new MemoryDatastore(),
			pins: new MemoryDatastore(),
			root: new MemoryDatastore()
		},
		{autoMigrate: false, repoLock: memoryLock, repoOwner: true}
	)
});

const ipfsFetch = async (hash, {timeout} = {}) => {
	const result = (async () => {
		const iter = (await ipfs).cat(hash);
		const buffers = [];
		for await (const buf of iter) {
			buffers.push(buf);
		}
		return Buffer.concat(buffers);
	})();

	const timeoutPromise =
		typeof timeout === 'number' && !isNaN(timeout) && timeout > 0 ?
			new Promise(resolve => {
				setTimeout(resolve, timeout);
			}).then(() =>
				Promise.reject(`Timeout of ${timeout.toString()} exceeded.`)
			) :
			undefined;

	return timeoutPromise ? Promise.race([result, timeoutPromise]) : result;
};

module.exports = ipfsFetch;
module.exports.ipfsFetch = ipfsFetch;
