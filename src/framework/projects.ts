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
    JapanWorldMarker,

    Sorting,
    Timetable,
    VoyageNest,
    TEDx,
    Senapp,
    ThisWebsite,

    APUPhotoshoot
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
    descriptionEN: `Simple chess made with Python and PyGame.
It can be used to play locally against another player or a random AI. `,
    descriptionJP: `Python と PyGame で作られたシンプルなチェスです。
他のプレイヤーやランダム AI とローカルで対戦できます。`,
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
    nameEN: 'Visual Pathfinding Algorithms',
    nameJP: '視覚的経路探索アルゴリズム',
    links: [
        { name: 'Website', url: 'https://senapp.github.io/VisualPathfindingAlgorithms/dist/index.html' },
        { name: 'GitHub', url: 'https://github.com/senapp/VisualPathfindingAlgorithms' },
    ],
    tools: ['Typescript', 'React', 'Javascript'],
    descriptionEN: `Visualizer for pathfinding algorithms such as A*, Dijkstra and Breadth-First Search.

Supports different rendering styles and different options for A*'s heuristic algorithm.

Started as a pure JavaScript project but was later converted to TypeScript and React.`,
    descriptionJP: `A*、ダイクストラ、幅優先探索などのパスファインディング アルゴリズムのビジュアライザーです。

A* のヒューリスティック アルゴリズムのさまざまなレンダリング スタイルとさまざまなオプションをサポートします。

純粋な JavaScript プロジェクトとして開始されましたが、後に TypeScript と React に変換されました。`,
    public: false,
    url: toUrl(`/projects/pathfinding`),
    photos: [],
    tags: ['Application', 'Coding Adventure', 'Algorithm' , 'Typescript', 'React']
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
    tools: ['HTML', 'CSS', 'Javascript', 'Sirvoy'],
    descriptionEN: `Booking site for B&B Gränden, a hotel in Skellefteå, Sweden.
Project completed on a freelance basis.`,
    descriptionJP: `スウェーデン、シェレフテオのホテル、B&B Gränden の予約サイトです。
フリーランスとして完了したプロジェクトです。`,
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
    descriptionEN: `Kanji practice application for learning Japanese.
It includes all the kanji for JLPT N5 to N1 and a dictionary for words that are used for each kanji. The application also supports "archiving" to practice new/memorized kanji.`,
    descriptionJP: `日本語学習のための漢字練習アプリケーションです。
JLPT N5～N1の全漢字と、各漢字に使われる単語の辞書を収録。また、新しい漢字や覚えた漢字を練習するための「アーカイブ」機能も搭載です。`,
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
    tools: ['Typescript', 'React', 'OpenStreetMap', 'GEOJson'],
    descriptionEN: `Marker application for recording destinations one wants to visit or already has visited before in the world or for the prefectures of Japan.
    The application supports exporting and uploading this marker data which is stored locally on the browser otherwise.`,
    descriptionJP: `世界中の行きたい場所や、すでに訪れたことのある場所、または日本の都道府県を記録するマーカー アプリケーションです。
このアプリケーションは、ブラウザーにローカルに保存されているマーカー データのエクスポートとアップロードをサポートしています。`,
    public: false,
    url: toUrl(`/projects/japanworldmarker`),
    photos: [],
    tags: ['Application', 'Coding Adventure', 'Typescript', 'React', 'OpenStreetMap']
};

const SortingProject: ProjectInformation = {
    type: ProjectIdentity.Sorting,
    icon: ImageIdentity.Sorting,
    nameEN: 'Visual Sorting Algorithms',
    nameJP: '視覚的ソートアルゴリズム',
    links: [
        { name: 'Website', url: 'https://senapp.github.io/VisualSortingAlgorithms/dist/index.html' },
        { name: 'GitHub', url: 'https://github.com/senapp/VisualSortingAlgorithms' },
    ],
    tools: ['Typescript', 'React'],
    descriptionEN: `Visualizer for sorting algorithms such as Quick Sort, Bubble Sort, and Insertion Sort.

This visualizer not only visualizes how the algorithm sorts the array with a graph, but also shows which element of the array is being checked and how that element is treated in the algorithm.`,
    descriptionJP: `クイック ソート、バブル ソート、挿入ソートなどのソート アルゴリズムのビジュアライザー。

このビジュアライザーは、アルゴリズムが配列をソートする方法をグラフで視覚化するだけでなく、配列のどの要素がチェックされているか、その要素がアルゴリズムでどのように扱われるかを示します。`,
    public: false,
    url: toUrl(`/projects/sorting`),
    photos: [],
    tags: ['Application', 'Coding Adventure', 'Algorithm' , 'Typescript', 'React']
};

const TimetableProject: ProjectInformation = {
    type: ProjectIdentity.Timetable,
    icon: ImageIdentity.Timetable,
    nameEN: 'APU Timetable Maker',
    nameJP: 'APU時間割作成ツール',
    links: [
        { name: 'Website', url: 'https://senapp.github.io/APU-Timetable/dist/index.html' },
        { name: 'GitHub', url: 'https://github.com/senapp/APU-Timetable' },
    ],
    tools: ['Typescript', 'React', 'PDF Reader', 'Google API'],
    descriptionEN: `This is an application that takes the PDF which Ritsumeikan APU provides to students upon finalizing course registration and turns it into a customizable and exportable timetable which includes additional course information.

Upon loading the courses into this application, each course's location, such as the classroom, is searched for and added automatically to the timetable. This application also allows students to add or remove courses, such as courses where they have a Teaching Assistant role or courses which they plan to drop.`,
    descriptionJP: `これは、立命館APUが履修登録を完了した際に学生に提供するPDFを、追加のコース情報を含むカスタマイズおよびエクスポート可能な時間割に変換するアプリケーションです。

このアプリケーションにコースを読み込むと、教室などの各コースの場所が検索され、時間割に自動的に追加されます。このアプリケーションでは、ティーチングアシスタントの役割を持つコースや、ドロップする予定のコースなど、学生がコースを追加または削除することもできます。`,
    public: false,
    url: toUrl(`/projects/timetable`),
    photos: [],
    tags: ['Application', 'Coding Adventure', 'University' , 'Typescript', 'React']
};

const VoyageNestProject: ProjectInformation = {
    type: ProjectIdentity.VoyageNest,
    icon: ImageIdentity.VoyageNest,
    nameEN: 'VoyageNest',
    nameJP: 'VoyageNest',
    links: [
        { name: 'Presentation', url: 'https://www.canva.com/design/DAF3fV5gsMI/bOFy_4E9ZfHAq6ZryjQR-w/view?utm_content=DAF3fV5gsMI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7e6c469848'},
        { name: 'Demo', url: 'https://www.youtube.com/shorts/Mx9Ie5B70fs'},
    ],
    tools: ['Typescript', 'React'],
    descriptionEN: `VoyageNest was made as an application startup proposal for the Hult Prize at Ritsumeikan APU.

I was a part of a 5-person team that brainstormed, designed and delivered the pitch for the project. One of my main objectives was to make a demo for this application (which can be seen above). This demo was used during our pitch to showcase what we believed the app could be.

The idea behind VoyageNest is that, especially in Japan, there is an issue of overtourism. As most governments want more tourists to come, however, as can be seen in Japan, this results in most people gathering in just the major cities and major tourist spots.

So VoyageNest would be the solution for that! It would take in the users' preferences for travel destinations and guide the users to lesser-known locations within their desired locations. According to a study by booking.com the majority of travellers want to avoid popular tourist spots and 30% are willing to change their destination completely because of this.

VoyageNest would find them hidden gems, connect them with locals, other travellers and allows its users to truly experience the culture of a destination and have a more fulling journey.`,
    descriptionJP: `VoyageNest は、立命館 APU の Hult Prize 向けのアプリケーション スタートアップ提案として作成されました。

私は 5 人のチームの一員として、このプロジェクトのブレインストーミング、設計、プレゼンテーションを行いました。私の主な目的の 1 つは、このアプリケーションのデモを作成することでした (上記を参照)。このデモは、このアプリケーションがどのようなものになるかを示すために、プレゼンテーション中に使用されました。

VoyageNest の背後にあるアイデアは、特に日本では、観光過多の問題があるということです。ほとんどの政府はより多くの観光客が来ることを望んでいますが、日本に見られるように、ほとんどの人が主要都市と主要な観光スポットに集まる結果になっています。

そこで、VoyageNest がその解決策になります。旅行先に関するユーザーの好みを取り入れ、ユーザーが希望する場所内のあまり知られていない場所にユーザーを誘導します。booking.com の調査によると、旅行者の大多数は人気の観光スポットを避けたいと考えており、30% はそのために目的地を完全に変更する用意があります。

VoyageNest は、隠れた名所を見つけ、地元の人々や他の旅行者と結び付け、ユーザーが目的地の文化を真に体験し、より充実した旅をできるようにします。`,
    public: false,
    url: toUrl(`/projects/voyagenest`),
    photos: [],
    tags: ['University', 'Typescript', 'React', 'Business']
};

const TEDxProject: ProjectInformation = {
    type: ProjectIdentity.TEDx,
    icon: ImageIdentity.TEDx,
    nameEN: 'TEDxAPU',
    nameJP: 'TEDxAPU',
    links: [
        { name: "Website", url: "https://tedxritsumeikanapu.com/"},
        { name: "Instagram", url: "https://www.instagram.com/tedxritsumeikanapu/"}
    ],
    tools: ['Wix.com'],
    descriptionEN: `TEDx APU is a student-organized TEDx event at Ritsumeikan Asia Pacific University.

Currently, for TEDxAPU 2025, I am the Head of Web Design, leading a team of 8 students working to deliver a valuable and high-quality experience to users searching for TEDxAPU.

I also joined the TEDxAPU 2024 event as a web designer to restart the event and website, which last took place at APU in 2019.

TEDxAPU 2025 has the theme of "Odyssey", where speakers will be sharing their unique journeys with the world. The speakers for TEDxAPU 2025 include Kantaro, an influencer sharing his journey walking across Japan with his Chiba-inu, with his 2 million followers across social media. Yamashita, the chairman of the social welfare cooperation Taiyo no Ie and the author of the book "So What If I'm Quadriplegic?". Yoneyama, president of Ritsumeikan APU and vice chancellor of Ritsumeikan Trust, leads a university with over 6000 students from over 110 countries. In addition to these speakers, winners of the Student Speaker League will also take the stage, Sunny, Yuhi and Cattleya.`,
    descriptionJP: `TEDx APUは、立命館アジア太平洋大学の学生が主催するTEDxイベントです。

現在、私はTEDxAPU 2025のWebデザイン責任者として、TEDxAPUを検索するユーザーに価値ある高品質の体験を提供するために取り組んでいる8人の学生チームを率いています。

また、2019年にAPUで最後に開催されたイベントとWebサイトを再開するために、TEDxAPU 2024イベントにWebデザイナーとして参加しました。

TEDxAPU 2025のテーマは「オデッセイ」で、スピーカーは独自の旅を世界と共有します。TEDxAPU 2025のスピーカーには、ソーシャルメディアで200万人のフォロワーを持ち、千葉犬と一緒に日本中を歩いて旅するインフルエンサーのカンタロー氏や、社会福祉法人太陽の家理事長で「四肢麻痺でもどうにかなる？」の著者でもある山下氏などがいます。立命館APU学長であり、学校法人立命館副総長でもある米山氏は、110カ国以上から6,000人以上の学生が集まる大学を率いています。これらのスピーカーに加え、学生スピーカーリーグの優勝者であるサニー、ユウヒ、カトレアも登壇します。`,
    public: false,
    url: toUrl(`/projects/tedx`),
    photos: [],
    tags: ['University', 'Website', 'Wix']
};

const SenappProject: ProjectInformation = {
    type: ProjectIdentity.Senapp,
    icon: ImageIdentity.Senapp,
    nameEN: 'Senapp Studios',
    nameJP: 'Senapp Studios',
    links: [
        { name: "Website", url: "https://senapp.github.io/"},
    ],
    tools: ['Javascript', 'HTML CSS'],
    descriptionEN: ``,
    descriptionJP: ``,
    public: false,
    url: toUrl(`/projects/senapp`),
    photos: [],
    tags: []
};

const ThisWebsiteProject: ProjectInformation = {
    type: ProjectIdentity.ThisWebsite,
    icon: ImageIdentity.ThisWebsite,
    nameEN: 'This website',
    nameJP: 'このウェブサイト',
    links: [
        { name: "Website", url: "https://albinbjoerklund.com"},
    ],
    tools: ['Typescript', 'React', 'Google Analytics'],
    descriptionEN: ``,
    descriptionJP: ``,
    public: false,
    url: toUrl(`/projects/thiswebsite`),
    photos: [],
    tags: []
};

const APUPhotoshootProject: ProjectInformation = {
    type: ProjectIdentity.APUPhotoshoot,
    icon: ImageIdentity.APUPhotoshoot,
    nameEN: 'APU Modelling',
    nameJP: 'APUモデリング',
    links: [],
    tools: [],
    descriptionEN: ``,
    descriptionJP: ``,
    public: false,
    url: toUrl(`/projects/apuphotoshoot`),
    photos: [],
    tags: ['Model']
};

export const ProjectStore = new Map<ProjectIdentity, ProjectInformation>([
    [ProjectIdentity.IFS, IFSProject],
    [ProjectIdentity.EFS, EFSProject],

    [ProjectIdentity.Skeadeals, SkeadealsProject],
    [ProjectIdentity.VoyageNest, VoyageNestProject],

    [ProjectIdentity.TEDx, TEDxProject],
    [ProjectIdentity.BBGranden, BBGrandenProject],
    [ProjectIdentity.Senapp, SenappProject],
    [ProjectIdentity.ThisWebsite, ThisWebsiteProject],

    [ProjectIdentity.Pathfinding, PathfindingProject],
    [ProjectIdentity.Sorting, SortingProject],
    [ProjectIdentity.JapanWorldMarker, JapanWorldMarkerProject],
    [ProjectIdentity.Kanji, KanjiAppProject],
    [ProjectIdentity.GameEngine, GameEngineProject],
    [ProjectIdentity.Chess, ChessProject],
    [ProjectIdentity.Timetable, TimetableProject],

    [ProjectIdentity.APUPhotoshoot, APUPhotoshootProject],
]);