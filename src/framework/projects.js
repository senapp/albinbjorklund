"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectStore = exports.ProjectIdentity = void 0;
const connection_1 = require("../utils/connection");
const images_1 = require("./images");
var ProjectIdentity;
(function (ProjectIdentity) {
    ProjectIdentity[ProjectIdentity["None"] = 0] = "None";
    ProjectIdentity[ProjectIdentity["IFS"] = 1] = "IFS";
    ProjectIdentity[ProjectIdentity["EFS"] = 2] = "EFS";
    ProjectIdentity[ProjectIdentity["Chess"] = 3] = "Chess";
    ProjectIdentity[ProjectIdentity["GameEngine"] = 4] = "GameEngine";
    ProjectIdentity[ProjectIdentity["Pathfinding"] = 5] = "Pathfinding";
    ProjectIdentity[ProjectIdentity["Skeadeals"] = 6] = "Skeadeals";
    ProjectIdentity[ProjectIdentity["BBGranden"] = 7] = "BBGranden";
    ProjectIdentity[ProjectIdentity["Kanji"] = 8] = "Kanji";
    ProjectIdentity[ProjectIdentity["JapanWorldMarker"] = 9] = "JapanWorldMarker";
})(ProjectIdentity = exports.ProjectIdentity || (exports.ProjectIdentity = {}));
const IFSProject = {
    type: ProjectIdentity.IFS,
    icon: images_1.ImageIdentity.IFS,
    name: 'International Football Simulator',
    links: [
        { name: 'Android', url: 'https://play.google.com/store/apps/details?id=com.Senapp.FC2018S' },
        { name: 'IOS', url: 'https://apps.apple.com/us/app/international-fotball-sim/id1500480022' }
    ],
    tools: [],
    description: '',
    public: true,
    url: (0, connection_1.toUrl)(`/projects/ifs`),
    photos: [],
};
const EFSProject = {
    type: ProjectIdentity.EFS,
    icon: images_1.ImageIdentity.EFS,
    name: 'English Football Simulator',
    links: [
        { name: 'Android', url: 'https://play.google.com/store/apps/details?id=com.Senapp.ENGFS' },
    ],
    tools: [],
    description: '',
    public: true,
    url: (0, connection_1.toUrl)(`/projects/efs`),
    photos: [],
};
const ChessProject = {
    type: ProjectIdentity.Chess,
    icon: images_1.ImageIdentity.Chess,
    name: 'Chess',
    links: [
        { name: 'Github', url: 'https://github.com/senapp/ChessPython' },
    ],
    tools: [],
    description: '',
    public: false,
    url: (0, connection_1.toUrl)(`/projects/chess`),
    photos: [],
};
const GameEngineProject = {
    type: ProjectIdentity.GameEngine,
    icon: images_1.ImageIdentity.GameEngine,
    name: 'Senapp Game Engine',
    links: [
        { name: 'Github', url: 'https://github.com/senapp/senappGameEngine' },
    ],
    tools: [],
    description: '',
    public: false,
    url: (0, connection_1.toUrl)(`/projects/senappGameEngine`),
    photos: [],
};
const PathfindingProject = {
    type: ProjectIdentity.Pathfinding,
    icon: images_1.ImageIdentity.Pathfinding,
    name: 'Pathfinding Algorithms',
    links: [
        { name: 'Browser', url: 'https://senapp.github.io/VisualPathfindingAlgorithms/dist/index.html' },
        { name: 'Github', url: 'https://github.com/senapp/VisualPathfindingAlgorithms' },
    ],
    tools: [],
    description: '',
    public: false,
    url: (0, connection_1.toUrl)(`/projects/pathfinding`),
    photos: [],
};
const SkeadealsProject = {
    type: ProjectIdentity.Skeadeals,
    icon: images_1.ImageIdentity.Skeadeals,
    name: 'Skeådeals',
    links: [
        { name: 'Award', url: 'https://www.facebook.com/watch/?v=637417440390173' },
    ],
    tools: [],
    description: '',
    public: false,
    url: (0, connection_1.toUrl)(`/projects/skeadeals`),
    photos: [],
};
const BBGrandenProject = {
    type: ProjectIdentity.BBGranden,
    icon: images_1.ImageIdentity.BBGranden,
    name: 'B&B Gränden Website',
    links: [
        { name: 'Website', url: 'https://www.bbgranden.se/pages/home' },
    ],
    tools: [],
    description: '',
    public: false,
    url: (0, connection_1.toUrl)(`/projects/bbgranden`),
    photos: [],
};
const KanjiAppProject = {
    type: ProjectIdentity.Kanji,
    icon: images_1.ImageIdentity.Kanji,
    name: 'Kanji Practice',
    links: [
        { name: 'Browser', url: 'https://senapp.github.io/KanjiApp/dist/index.html' },
        { name: 'Github', url: 'https://github.com/senapp/KanjiApp' },
    ],
    tools: ['Typescript', 'React'],
    description: `Kanji practicing application for learning Japanese.`,
    public: false,
    url: (0, connection_1.toUrl)(`/projects/kanji`),
    photos: []
};
const JapanWorldMarkerProject = {
    type: ProjectIdentity.JapanWorldMarker,
    icon: images_1.ImageIdentity.JapanWorldMarker,
    name: 'Japan & World Marker',
    links: [
        { name: 'Browser', url: 'https://senapp.github.io/JapanAndWorldMarker/dist/index.html' },
        { name: 'Github', url: 'https://github.com/senapp/JapanAndWorldMarker' },
    ],
    tools: ['Typescript', 'React', 'OpenStreetMap'],
    description: `Marker application for recording which locations around Japan and in the world you have been to or wish to go to.`,
    public: false,
    url: (0, connection_1.toUrl)(`/projects/japanworldmarker`),
    photos: []
};
exports.ProjectStore = new Map([
    [ProjectIdentity.IFS, IFSProject],
    [ProjectIdentity.EFS, EFSProject],
    [ProjectIdentity.Chess, ChessProject],
    [ProjectIdentity.GameEngine, GameEngineProject],
    [ProjectIdentity.Pathfinding, PathfindingProject],
    [ProjectIdentity.Skeadeals, SkeadealsProject],
    [ProjectIdentity.BBGranden, BBGrandenProject],
    [ProjectIdentity.Kanji, KanjiAppProject],
    [ProjectIdentity.JapanWorldMarker, JapanWorldMarkerProject],
]);
//# sourceMappingURL=projects.js.map