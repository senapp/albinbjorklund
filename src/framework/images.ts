export enum ImageIdentity {
    None,
    Instagram,
    Youtube,
    Twitter,
    SenappStudios,
    Moon,
    Sun,
    IFS,
    EFS,
    Chess,
    GameEngine,
    Pathfinding,
    Skeadeals,
    BBGranden,
    Translation,
    Expand,
    Close,
    Kanji,
    JapanWorldMarker,

    Date,
    Location,
    Mail,
    LinkedIn
}

export type ImageInformation = {
    url: string;
    fontawesome?: boolean;
}

export const ImageStore = new Map<ImageIdentity, ImageInformation>([
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