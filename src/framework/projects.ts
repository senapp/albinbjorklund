import { toUrl } from '../utils/connection';
import { ImageIdentity } from './images';

export enum ProjectIdentity {
    None,
    IFS,
    EFS,
    Chess,
    GameEngine,
    Pathfinding,
    Skeadeals,
    BBGranden,
    Kanji,
    JapanWorldMarker
}

export type Link = {
    url: string;
    name: string;
}

export type ProjectInformation = {
    type: ProjectIdentity;
    icon: ImageIdentity;
    nameJP: string;
    nameEN: string;
    links: Link[];
    tools: string[];
    descriptionEN: string;
    descriptionJP: string;
    public: boolean;
    url: string;
    photos: string[];
    tags: string[];
}


const IFSProject: ProjectInformation = {
    type: ProjectIdentity.IFS,
    icon: ImageIdentity.IFS,
    nameEN: 'International Football Sim',
    nameJP: 'インターナショナル サッカー シミュレーター',
    links: [
        { name: 'Android', url: 'https://play.google.com/store/apps/details?id=com.Senapp.FC2018S' },
        { name: 'iOS', url: 'https://apps.apple.com/us/app/international-fotball-sim/id1500480022' }
    ],
    tools: ['C#', 'Unity', 'Firebase', 'Admob'],
    descriptionEN: `Features:

Create a tournament with whatever options you like. You want a tournament set in Russia with 8 groups and 4 teams in each group, then you can do it. Want to simulate a four league system in which you have a different amount of teams in each group with custom names, then you can do it.

Create and edit teams, federations, players, want to change the name of something then you can do it. Each aspect has many things you can change.

Each match has an in-depth view of match statistics such as possession, who scored, which can be view live or after the match is complete.

Simulate international football in every possible way!

Privacy Policy: https://senapp.github.io/pages/legal.html?0
Terms and Conditions: https://senapp.github.io/pages/legal.html?1`,
    descriptionJP: `機能:

好きなオプションでトーナメントを作成します。ロシアで 8 つのグループと各グループに 4 チームがあるトーナメントを作成したい場合は、それを行うことができます。各グループに異なる数のチームがあり、カスタム名を持つ 4 つのリーグ システムをシミュレートしたい場合は、それを行うことができます。

チーム、連盟、プレーヤーを作成および編集し、何かの名前を変更したい場合は、それを行うことができます。各側面には、変更できるものがたくさんあります。

各試合には、所有権、得点者などの試合統計の詳細なビューがあり、ライブまたは試合完了後に表示できます。

あらゆる方法で国際サッカーをシミュレートします。

プライバシー ポリシー: https://senapp.github.io/pages/legal.html?0
利用規約: https://senapp.github.io/pages/legal.html?1`,
    public: true,
    url: toUrl(`/projects/ifs`),
    photos: ['/resources/projects/photos/ifs/ifs.png'],
    tags: ['Game', 'Released', 'C#', 'Unity', 'Firebase']
};

const EFSProject: ProjectInformation = {
    type: ProjectIdentity.EFS,
    icon: ImageIdentity.EFS,
    nameEN: 'English Football Sim',
    nameJP: 'イギリス サッカー シミュレーター',
    links: [
        { name: 'Android', url: 'https://play.google.com/store/apps/details?id=com.Senapp.ENGFS' },
    ],
    tools: ['C#', 'Unity', 'Admob'],
    descriptionEN: `Features:

Create a tournament: 2, 4, 8 or 16 Group Stages in a group stage style tournament. 2 - 20 teams in the league tournament. You can also choose how many games each team plays. Elimination tournament, start the tournament from the final, semifinal, quarterfinal or the knockout stage.

You can also randomize the groups/league with either relatively good teams or completely random teams out of 68. You can also edit each group and team individually.

Custom Game; Place two teams out of 68 against each other and see what the result would be.

Create and Edit teams; You have the ability to create your own team, upload a custom logo, select a level and a name for the new team. You also have the ability to edit already existing teams and change their level, logo and name.

68 teams!

Privacy Policy: https://senapp.github.io/pages/legal.html?0
Terms and Conditions: https://senapp.github.io/pages/legal.html?1`,
    descriptionJP: `機能:

トーナメントの作成: グループ ステージ形式のトーナメントで 2、4、8、または 16 のグループ ステージ。リーグ トーナメントでは 2 ～ 20 チーム。各チームがプレイするゲーム数も選択できます。エリミネーション トーナメントでは、決勝、準決勝、準々決勝、またはノックアウト ステージからトーナメントを開始します。

また、68 チームの中から比較的優秀なチームまたは完全にランダムなチームでグループ/リーグをランダム化することもできます。各グループとチームを個別に編集することもできます。

カスタム ゲーム: 68 チームの中から 2 チームを対戦させて、結果を確認します。

チームの作成と編集: 独自のチームを作成し、カスタム ロゴをアップロードし、新しいチームのレベルと名前を選択できます。既存のチームを編集して、レベル、ロゴ、名前を変更することもできます。

68 チーム!

プライバシーポリシー: https://senapp.github.io/pages/legal.html?0
利用規約: https://senapp.github.io/pages/legal.html?1`,
    public: true,
    url: toUrl(`/projects/efs`),
    photos: [],
    tags: ['Game', 'Released', 'C#', 'Unity']
};

const ChessProject: ProjectInformation = {
    type: ProjectIdentity.Chess,
    icon: ImageIdentity.Chess,
    nameEN: 'Chess',
    nameJP: 'チェス',
    links: [
        { name: 'GitHub', url: 'https://github.com/senapp/ChessPython' },
    ],
    tools: ['Python', 'PyGame'],
    descriptionEN: `Chess made in Python.`,
    descriptionJP: `Python で作られたチェスです。`,
    public: false,
    url: toUrl(`/projects/chess`),
    photos: [],
    tags: ['Application', 'Coding Adventure', 'Python', 'PyGame']
};

const GameEngineProject: ProjectInformation = {
    type: ProjectIdentity.GameEngine,
    icon: ImageIdentity.GameEngine,
    nameEN: 'Senapp Game Engine',
    nameJP: 'Senapp ゲームエンジン',
    links: [
        { name: 'GitHub', url: 'https://github.com/senapp/senappGameEngine' },
    ],
    tools: ['C#', 'OpenTK', 'OpenGL'],
    descriptionEN: `Senapp Game Engine is a simple game engine written in C# with OpenGL through OpenTK.

The main idea behind the engine was to explore game engine programming and make something that would be easy to use when creating a game and give quite good performance, basically modeled like a simple Unity3D but in your code editor.

Tutorials used:
GalacticGlum - Game Engine Tutorials: https://github.com/GalacticGlum/GlumEngine2D?tab=readme-ov-file
ThinMatrix - OpenGL 3D Game Tutorials: https://www.youtube.com/watch?v=VS8wlS9hF8E&list=PLRIWtICgwaX0u7Rf9zkZhLoLuZVfUksDP&ab_channel=ThinMatrix
Cherno - Game Engine: https://www.youtube.com/watch?v=JxIZbV_XjAs&list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT&ab_channel=TheCherno

Features:
Game object system
Component system
Scenes & scene management
Game object relation hierarchy
Transformation with translation, rotation & scaling with relation hierarchy
[UI] Font class with loading
[UI] Texts
[UI] Sprites
[UI] Buttons
[UI] TextButtons
[UI] Input fields
RaycastTarget/UI, enter/exit/click/unfocus with pixel precision for game objects
Keyboard input
Mouse input
Controller input
Model & texture loader
OBJ & DAE loader
Box collisions
Component renderers & shaders
Skybox rendering & shader
FrameBuffer & FrameBuffer rendering
Deferred rendering
Frame rate info
Wire frame rendering
Settings class & file
GraphicSettings, extension of Settings
Resource loading
Extension methods for vectors, math, & randomizing
Example programs`,
    descriptionJP: `Senapp ゲーム エンジンは、OpenTK を介して OpenGL を使用した C# で記述されたシンプルなゲーム エンジンです。

このエンジンの主なアイデアは、ゲーム エンジン プログラミングを探求し、ゲームを作成するときに使いやすく、非常に優れたパフォーマンスを発揮するものを作成することです。基本的には、コード エディターでシンプルな Unity3D のようにモデル化されています。

使用したチュートリアル:
GalacticGlum - Game Engine Tutorials: https://github.com/GalacticGlum/GlumEngine2D?tab=readme-ov-file
ThinMatrix - OpenGL 3D Game Tutorials: https://www.youtube.com/watch?v=VS8wlS9hF8E&list=PLRIWtICgwaX0u7Rf9zkZhLoLuZVfUksDP&ab_channel=ThinMatrix
Cherno - Game Engine: https://www.youtube.com/watch?v=JxIZbV_XjAs&list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT&ab_channel=TheCherno

機能:
ゲーム オブジェクト システム
コンポーネント システム
シーンとシーン管理
ゲーム オブジェクト リレーション階層
リレーション階層による変換、回転、スケーリング
[UI] 読み込み付きフォント クラス
[UI] テキスト
[UI] スプライト
[UI] ボタン
[UI] テキスト ボタン
[UI] 入力フィールド
RaycastTarget/UI、ゲーム オブジェクトのピクセル精度による開始/終了/クリック/フォーカス解除
キーボード入力
マウス入力
コントローラー入力
モデルとテクスチャ ローダー
OBJ と DAE ローダー
ボックス衝突
コンポーネント レンダラーとシェーダー
スカイボックス レンダリングとシェーダー
FrameBuffer と FrameBuffer レンダリング
遅延レンダリング
フレーム レート情報
ワイヤー フレーム レンダリング
設定クラスとファイル
GraphicSettings、設定の拡張
リソースの読み込み
ベクター、数学、ランダム化の拡張メソッド
サンプル プログラム`,
    public: false,
    url: toUrl(`/projects/senappGameEngine`),
    photos: [],
    tags: ['Application', 'Coding Adventure', 'C#', 'OpenGL', 'OpenTK']
};

const PathfindingProject: ProjectInformation = {
    type: ProjectIdentity.Pathfinding,
    icon: ImageIdentity.Pathfinding,
    nameEN: 'Pathfinding Algorithms',
    nameJP: '経路探索アルゴリズム',
    links: [
        { name: 'Website', url: 'https://senapp.github.io/VisualPathfindingAlgorithms/dist/index.html' },
        { name: 'GitHub', url: 'https://github.com/senapp/VisualPathfindingAlgorithms' },
    ],
    tools: ['Typescript', 'React', 'Javascript'],
    descriptionEN: `Visualizer for pathfinding algorithms such as A*

Started as a pure Javascript project but was later converted to Typescript and React`,
    descriptionJP: `A* などの経路探索アルゴリズムのビジュアライザー

純粋な Javascript プロジェクトとして開始されましたが、後に Typescript と React に変換されました`,
    public: false,
    url: toUrl(`/projects/pathfinding`),
    photos: [],
    tags: ['Application', 'Coding Adventure', 'Typescript', 'React']
};

const SkeadealsProject: ProjectInformation = {
    type: ProjectIdentity.Skeadeals,
    icon: ImageIdentity.Skeadeals,
    nameEN: 'Skeådeals',
    nameJP: 'Skeådeals',
    links: [
        { name: 'Award', url: 'https://www.facebook.com/watch/?v=637417440390173' },
    ],
    tools: ['C#', 'Unity', 'Firebase'],
    descriptionEN: `Skeådeals was a coupon app that offered coupons from local companies in Skellefteå.

All discounts were one-time discounts and come up with a confirmation screen when used, this screen you would show to the cashier to use the coupon.

The app was active between 1 January 2020 and 1 July 2020 and coupons came and went constantly during that period.`,
    descriptionJP: `Skeådealsは、シェレフテオの地元企業のクーポンを提供するクーポン アプリでした。

すべての割引は 1 回限りの割引で、使用すると確認画面が表示されます。この画面をレジ係に提示してクーポンを使用します。

このアプリは 2020 年 1 月 1 日から 2020 年 7 月 1 日まで有効で、その期間中はクーポンが頻繁に発行されたり消えたりしていました。`,
    public: false,
    url: toUrl(`/projects/skeadeals`),
    photos: [],
    tags: ['App', 'Unity', 'C#', 'Firebase', 'Business']
};

const BBGrandenProject: ProjectInformation = {
    type: ProjectIdentity.BBGranden,
    icon: ImageIdentity.BBGranden,
    nameEN: 'B&B Gränden - Hotel',
    nameJP: 'B&B Gränden － ホテル',
    links: [
        { name: 'Website', url: 'https://www.bbgranden.se/pages/home' },
    ],
    tools: ['HTML', 'CSS', 'Javascript'],
    descriptionEN: `Booking site for B&B Gränden, a hotel in Skellefteå, Sweden.`,
    descriptionJP: `スウェーデン、シェレフテオのホテル、B&B Gränden の予約サイトです。`,
    public: false,
    url: toUrl(`/projects/bbgranden`),
    photos: [],
    tags: ['Website', 'HTML CSS', 'Javascript', 'Sirvoy', 'Freelance Work']
};

const KanjiAppProject: ProjectInformation = {
    type: ProjectIdentity.Kanji,
    icon: ImageIdentity.Kanji,
    nameEN: 'Kanji Practice',
    nameJP: '漢字練習',
    links: [
        { name: 'Website', url: 'https://senapp.github.io/KanjiApp/dist/index.html' },
        { name: 'GitHub', url: 'https://github.com/senapp/KanjiApp' },
    ],
    tools: ['Typescript', 'React'],
    descriptionEN: `Kanji practicing application for learning Japanese.`,
    descriptionJP: `日本語学習のための漢字練習アプリケーションです。`,
    public: false,
    url: toUrl(`/projects/kanji`),
    photos: [],
    tags: ['Application', 'Coding Adventure', 'Typescript', 'React']
};

const JapanWorldMarkerProject: ProjectInformation = {
    type: ProjectIdentity.JapanWorldMarker,
    icon: ImageIdentity.JapanWorldMarker,
    nameEN: 'Japan & World Marker',
    nameJP: '日本と世界のマーカー',
    links: [
        { name: 'Website', url: 'https://senapp.github.io/JapanAndWorldMarker/dist/index.html' },
        { name: 'GitHub', url: 'https://github.com/senapp/JapanAndWorldMarker' },
    ],
    tools: ['Typescript', 'React', 'OpenStreetMap'],
    descriptionEN: `Marker application for recording which locations around Japan and in the world you have been to or wish to go to.`,
    descriptionJP: `日本全国や世界のどこへ行ったか、行きたいかを記録するマーカーアプリケーションです。`,
    public: false,
    url: toUrl(`/projects/japanworldmarker`),
    photos: [],
    tags: ['Application', 'Coding Adventure', 'Typescript', 'React', 'OpenStreetMap']
};

export const ProjectStore = new Map<ProjectIdentity, ProjectInformation>([
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