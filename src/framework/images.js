"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageStore = exports.ImageIdentity = void 0;
var ImageIdentity;
(function (ImageIdentity) {
    ImageIdentity[ImageIdentity["None"] = 0] = "None";
    ImageIdentity[ImageIdentity["Instagram"] = 1] = "Instagram";
    ImageIdentity[ImageIdentity["Youtube"] = 2] = "Youtube";
    ImageIdentity[ImageIdentity["Twitter"] = 3] = "Twitter";
    ImageIdentity[ImageIdentity["SenappStudios"] = 4] = "SenappStudios";
    ImageIdentity[ImageIdentity["Moon"] = 5] = "Moon";
    ImageIdentity[ImageIdentity["Sun"] = 6] = "Sun";
    ImageIdentity[ImageIdentity["IFS"] = 7] = "IFS";
    ImageIdentity[ImageIdentity["EFS"] = 8] = "EFS";
    ImageIdentity[ImageIdentity["Chess"] = 9] = "Chess";
    ImageIdentity[ImageIdentity["GameEngine"] = 10] = "GameEngine";
    ImageIdentity[ImageIdentity["Pathfinding"] = 11] = "Pathfinding";
    ImageIdentity[ImageIdentity["Skeadeals"] = 12] = "Skeadeals";
    ImageIdentity[ImageIdentity["BBGranden"] = 13] = "BBGranden";
    ImageIdentity[ImageIdentity["Translation"] = 14] = "Translation";
    ImageIdentity[ImageIdentity["Expand"] = 15] = "Expand";
    ImageIdentity[ImageIdentity["Close"] = 16] = "Close";
    ImageIdentity[ImageIdentity["Kanji"] = 17] = "Kanji";
    ImageIdentity[ImageIdentity["JapanWorldMarker"] = 18] = "JapanWorldMarker";
    ImageIdentity[ImageIdentity["Date"] = 19] = "Date";
    ImageIdentity[ImageIdentity["Location"] = 20] = "Location";
    ImageIdentity[ImageIdentity["Mail"] = 21] = "Mail";
    ImageIdentity[ImageIdentity["LinkedIn"] = 22] = "LinkedIn";
})(ImageIdentity = exports.ImageIdentity || (exports.ImageIdentity = {}));
exports.ImageStore = new Map([
    [ImageIdentity.Instagram, { url: 'fab fa-instagram', fontawesome: true }],
    [ImageIdentity.Youtube, { url: 'fab fa-youtube', fontawesome: true }],
    [ImageIdentity.Twitter, { url: 'fab fa-twitter', fontawesome: true }],
    [ImageIdentity.LinkedIn, { url: 'fab fa-linkedin', fontawesome: true }],
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
    [ImageIdentity.Expand, { url: 'fas fa-bars', fontawesome: true }],
    [ImageIdentity.Close, { url: 'fas fa-minus', fontawesome: true }],
    [ImageIdentity.Kanji, { url: '../resources/projects/kanji.png' }],
    [ImageIdentity.JapanWorldMarker, { url: '../resources/projects/japanworldmarker.png' }],
    [ImageIdentity.Date, { url: 'fas fa-calendar-alt', fontawesome: true }],
    [ImageIdentity.Location, { url: 'fas fa-map-pin', fontawesome: true }],
    [ImageIdentity.Mail, { url: 'fas fa-envelope', fontawesome: true }],
]);
//# sourceMappingURL=images.js.map