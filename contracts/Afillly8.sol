// SPDX-License-Identifier: GPL-3.0
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//

//
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//      @artist ::          stereoIII6.eth                                                                                                                                          //
//      @msg ::             stereoIII6.eth.chat                                                                                                                                     //
//      @github ::          stereoIII6                                                                                                                                              //
//                                                                                                                                                                                  //
//      @dev ::             stereoIII6.eth                                                                                                                                          //
//      @msg ::             stereoIII6.eth.chat                                                                                                                                     //
//      @github ::          stereoIII6                                                                                                                                              //
//                                                                                                                                                                                  //
//      @author ::          stereoIII6.eth                                                                                                                                          //
//      @msg ::             stereoIII6.eth.chat                                                                                                                                     //
//      @github ::          stereoIII6                                                                                                                                              //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//                                                                                                                                                                                  //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//      @title ::                                                                                                                                                        //
//      @description ::                                                                                                                          //
//      @version ::         0.0.1                                                                                                                                                   //
//      @purpose ::                                                                                                                              //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
//                                                                                                                                                                                  //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

pragma solidity ^0.8.0;

contract Affilly8 {
    address admin;
    uint8 UserRole; // 0-guets, 1-producer, 2-promoter, 3-both, 9-admin
    uint8 CampaignType; // 0-View, 1-Click, 2-Referal, 3-Sale, 4-Lifetime
    struct Campaign {
        uint256 id;
        address author;
        bytes description;
        bytes txAction;
        uint256 txPrice;
        address txTo;
        uint8 ppType;
        uint256 interval;
        uint256 start;
        uint256 end;
    }
    struct User {
        uint256 id;
        address user;
        uint8 role;
        bytes name;
        bytes status;
    }
    struct RefLinks {
        uint256 id;
        uint256 campaigId;
        address promoter;
    }
    Campaign[] public campaigns;
    User[] public users;
    mapping(address => bool) internal isUser;
    RefLinks[] public links;
    mapping(address => uint256) internal myId;
    mapping(address => uint256) internal myCampaignCount;
    mapping(address => mapping(uint256 => Campaign)) public showCampaign;
    mapping(address => uint256) internal mylinkCount;
    mapping(address => mapping(uint256 => RefLinks)) public showLinks;
    uint256 c;
    uint256 u;
    uint256 l;

    function signIn(string memory _name, string memory _status)
        external
        returns (bool)
    {
        users.push(User(u, msg.sender, 0, bytes(_name), bytes(_status)));
        myId[msg.sender] = u;
        isUser[msg.sender] = true;
        u++;
        return true;
    }

    function beProducer() external returns (bool) {
        uint256 id = myId[msg.sender];
        address userWallet = msg.sender;
        require(isUser[userWallet] == true, "you are not user");
        require(users[id].role != 1, "you are producer");
        if (users[id].role == 0) {
            users[id].role = 1;
        }
        if (users[id].role == 2) {
            users[id].role = 3;
        }
        return true;
    }

    function bePromoter() external returns (bool) {
        uint256 id = myId[msg.sender];
        address userWallet = msg.sender;
        require(isUser[userWallet] == true, "you are not user");
        require(users[id].role != 2, "you are promoter");
        if (users[id].role == 0) {
            users[id].role = 2;
        }
        if (users[id].role == 1) {
            users[id].role = 3;
        }
        return true;
    }

    function makeCampaign(
        string memory _desc,
        string memory _txAction,
        uint256 _price,
        address _to,
        uint8 _type,
        uint256 _int,
        uint256 _start,
        uint256 _end
    ) external returns (bool) {
        uint256 id = myId[msg.sender];
        address userWallet = msg.sender;
        require(isUser[userWallet] == true, "you are not user");
        require(
            users[id].role == 1 || users[id].role == 3,
            "you are not producer"
        );
        campaigns.push(
            Campaign(
                c,
                msg.sender,
                bytes(_desc),
                bytes(_txAction),
                _price,
                _to,
                _type,
                _int,
                _start,
                _end
            )
        );
        myCampaignCount[msg.sender]++;
        showCampaign[msg.sender][c] = campaigns[c];
        c++;
        return true;
    }

    function makeLink(uint256 _cid) external returns (bool) {
        uint256 id = myId[msg.sender];
        address userWallet = msg.sender;
        require(isUser[userWallet] == true, "you are not user");
        require(
            users[id].role == 2 || users[id].role == 3,
            "you are not promoter"
        );
        links.push(RefLinks(l, _cid, msg.sender));
        mylinkCount[msg.sender]++;
        showLinks[msg.sender][l] = links[l];
        l++;
        return true;
    }
}
