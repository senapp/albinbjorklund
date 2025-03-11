"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageStore = exports.ImageIdentity = void 0;
var ImageIdentity;
(function (ImageIdentity) {
    ImageIdentity[ImageIdentity["None"] = 0] = "None";
    ImageIdentity[ImageIdentity["Instagram"] = 1] = "Instagram";
    ImageIdentity[ImageIdentity["Youtube"] = 2] = "Youtube";
    ImageIdentity[ImageIdentity["Twitter"] = 3] = "Twitter";
    ImageIdentity[ImageIdentity["Reddit"] = 4] = "Reddit";
    ImageIdentity[ImageIdentity["Discord"] = 5] = "Discord";
    ImageIdentity[ImageIdentity["SenappStudios"] = 6] = "SenappStudios";
    ImageIdentity[ImageIdentity["Moon"] = 7] = "Moon";
    ImageIdentity[ImageIdentity["Sun"] = 8] = "Sun";
    ImageIdentity[ImageIdentity["IFS"] = 9] = "IFS";
    ImageIdentity[ImageIdentity["EFS"] = 10] = "EFS";
    ImageIdentity[ImageIdentity["Chess"] = 11] = "Chess";
    ImageIdentity[ImageIdentity["GameEngine"] = 12] = "GameEngine";
    ImageIdentity[ImageIdentity["Pathfinding"] = 13] = "Pathfinding";
    ImageIdentity[ImageIdentity["Skeadeals"] = 14] = "Skeadeals";
    ImageIdentity[ImageIdentity["BBGranden"] = 15] = "BBGranden";
    ImageIdentity[ImageIdentity["Translation"] = 16] = "Translation";
    ImageIdentity[ImageIdentity["Expand"] = 17] = "Expand";
    ImageIdentity[ImageIdentity["Close"] = 18] = "Close";
    ImageIdentity[ImageIdentity["Kanji"] = 19] = "Kanji";
    ImageIdentity[ImageIdentity["JapanWorldMarker"] = 20] = "JapanWorldMarker";
})(ImageIdentity = exports.ImageIdentity || (exports.ImageIdentity = {}));
exports.ImageStore = new Map([
    [ImageIdentity.Instagram, { url: 'fab fa-instagram', fontawesome: true }],
    [ImageIdentity.Youtube, { url: 'fab fa-youtube', fontawesome: true }],
    [ImageIdentity.Twitter, { url: 'fab fa-twitter', fontawesome: true }],
    [ImageIdentity.Reddit, { url: 'fab fa-reddit', fontawesome: true }],
    [ImageIdentity.Discord, { url: 'fab fa-discord', fontawesome: true }],
    [ImageIdentity.SenappStudios, { url: '../resources/logo.png' }],
    [ImageIdentity.Moon, { url: 'fas fa-moon', fontawesome: true }],
    [ImageIdentity.Sun, { url: 'fas fa-sun', fontawesome: true }],
    [ImageIdentity.IFS, { url: '../resources/projects/ifs.png' }],
    [ImageIdentity.EFS, { url: '../resources/projects/efs.png' }],
    [ImageIdentity.Chess, { url: '../resources/projects/chess.png' }],
    [ImageIdentity.GameEngine, { url: '../resources/projects/gameEngine.png' }],
    [ImageIdentity.Pathfinding, { url: '../resources/projects/pathfinding.png' }],
    [ImageIdentity.Skeadeals, { url: '../resources/projects/skeadeals.png' }],
    [ImageIdentity.BBGranden, { url: '../resources/projects/bbgranden.png' }],
    [ImageIdentity.Translation, { url: 'fas fa-language', fontawesome: true }],
    [ImageIdentity.Expand, { url: '../resources/icons/menuBar.png' }],
    [ImageIdentity.Close, { url: '../resources/icons/close.png' }],
    [ImageIdentity.Kanji, { url: '../resources/projects/' }],
    [ImageIdentity.JapanWorldMarker, { url: '../resources/projects/' }],
]);
//# sourceMappingURL=images.js.map