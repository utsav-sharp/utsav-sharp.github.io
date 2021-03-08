'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9d2b3a7da95d0e5580e598a077f74615",
".git/config": "00608fae57e6d2876ba80b43e629f0f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3f4ac2f38adf09e84ae50dac1cafa22e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d5b937236a7b2ec35d8ec18a392d898f",
".git/logs/refs/heads/master": "d5b937236a7b2ec35d8ec18a392d898f",
".git/logs/refs/remotes/origin/master": "23f9bd055e409db246319892915dffeb",
".git/objects/00/cfe2acea5a5c868512173146f0652e55cd6401": "f81692692af546810f69418bccc5f4b7",
".git/objects/01/468a1cd13beaea9effcbf3ed35e290bb424597": "fd89ac7faabe4e849b5170d89740f0a8",
".git/objects/02/aad97604933a3ab2982582bc7ccdfa15b48b48": "7ff6e5bb5b93beba13ef685ca762ee84",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/d111221137f3ec78edc447fafa49b6e340830f": "469944c44c62c9da08198dfe0e46196b",
".git/objects/05/79b79e1a28deeb3d34a4343ea4c6e1a7ab1ae1": "3dab95425aa9329c0730ca760828dbd7",
".git/objects/05/b479fc05ceb7f3ebc0f3a0c19d1cdee579ae8d": "d3ffc3a9a13ce06fdeeb8b15f9bd81df",
".git/objects/0e/6ddb771e71c92c8b9b16c29d56bdf670242b56": "0619f6bb116c95e2fa0a8e888e58af0d",
".git/objects/0f/567988745f42ce374458de493c85b0a45e5120": "d9c33f194bf572454baf96bab991ccd2",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/15/c07be3d59eb203521c3eff77ad7a40b7d3db62": "9379da1933a85739c7d63d350337c3c5",
".git/objects/16/25cf972fa924462982022d7e5347f530dc0d31": "be37369cf98737b99e4524702f1962c9",
".git/objects/18/d0013429ed7af62413817045e20b3125a0cbd9": "c0547d2c3f7cf074ad11be54fa92dea6",
".git/objects/1d/3a009be19e38861ced551ca69e5bad699c4f2e": "a24c6305e8cacb8b92734573b7a9c103",
".git/objects/1e/18f4fbeb1c9c013e519a73f595e385e75d2121": "9353deca4a1c17bf30254277bbda2dac",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/bd8217b39dfc987edade49acfb5fd8a43b9503": "0dd1c2add4be72b80edb0d01cc49e9c3",
".git/objects/28/a50be465c156a4d10dc8f8b044905ee1c8442e": "ba4bf4933fdb1597abc5c03c3eea33d7",
".git/objects/2b/1eea42f2895f320c9fbc4b92b2bdf85e2d1af0": "312a49bd9d31d83050e293ef1b93021d",
".git/objects/2f/6eeda23f001e1fa6f30c2b554f82f567415d75": "3a535b73588a85a1dfe69d47a45efe7a",
".git/objects/31/aac128cdb097cf803927388b7e2e64047ae57d": "9fbdf2ab3ca0b9555feab7b97693854c",
".git/objects/32/8095ceae85f2de443f5fd84971da8c623b77ce": "60e2933ecf7fa1055aecd998093d9c10",
".git/objects/33/9745573fe96e27afc2cf6f219384eb7736297e": "2139af28c699cafe6b634040c36783ab",
".git/objects/34/71ba8607f3dd0703bb5a71b0a9c4f79b5359ff": "a8e5994ee28307c8046a3ccbd1857f1d",
".git/objects/34/e7c3f1b21fc8e8d641c390528ae6c1972543c0": "56f0668184d3ca901f4b20a29d255eb4",
".git/objects/37/16bfe1998be6a3c532f3858f7b7b3e15b17f47": "b6447f310b0de23826a6b9384e2f72e6",
".git/objects/37/aa2e6c8c37878e4b36c4c4be88685d381dd811": "eb886672919538753513988e5111f4c5",
".git/objects/3b/8d160688ce426a13fdecaa2b0bf13f4616a1c0": "5c5cbff1dd1c6cad9d21bc4026cbbbad",
".git/objects/3f/4f9d18112c36aac313de2469569df510359997": "50b05a5c41a1fe5dd95f6084e6afdb70",
".git/objects/42/517847c95cdd914775baea87871d7b4e2e1334": "9bded27717ce14d6ccb34b6e92a80820",
".git/objects/42/5d041aa0be6946cc046d5bd58db8e258c73fce": "2026bcaa7652f5056962a8cd20ae5717",
".git/objects/43/42b4845791ad172ebd6bea13878bda82e647d5": "c353192bbf1ac9e96a4a85637b2ebe78",
".git/objects/43/f7ad7c7299116e054a3a9245dcfec953a5c12e": "73e28c9b9f0e45e860b73a9408336a2a",
".git/objects/44/e68d28d64ae74e2f7707eb73dce9a971274887": "06af00e24c915fa58e505bfe215eeb2b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/0267de347d1cf43b88ddb9aa945e0dc869ca7e": "0a8581b64a5dd33e24cefb0deaf981c8",
".git/objects/49/bdc3b680629ee4b946cc11b1209b5653b28b71": "75320a7a6399f779be6cac45acc772a5",
".git/objects/4a/8fe6e479ace8d85ab7981c1e10eb83f4670862": "3ad79c4c502d9a22490e32d628765201",
".git/objects/4e/dab12ea6bfc20c83394e33fcab85647416886d": "1b85c4f37b8538db0888570a983d030a",
".git/objects/4f/7fdee1713adad4ac024c20b64d4d2219298dde": "d197d5b02b5f985adae86af375c35684",
".git/objects/52/0b71f9fe8c74ce5525f90305073f2c53ff49f6": "8ee3fb9ded3a3bf5f454743c2d1c74da",
".git/objects/56/84cbd7ca24af1b8d5c9a95f1710d8c294f3b2e": "ca578de986782485570eaf273766f499",
".git/objects/57/75be6fc14f6d8383a4439ae8130aaf33bccac5": "dedc2ea00cab27455a0c837bc67b4834",
".git/objects/5c/7d73bdbe7752f9966297b373f95064027d0e01": "c48cce2e88d121faa2f6e69f9141647d",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5e/ae537cec95de1478e43fbfc059081f12980004": "41b0b2ddac42004b6249ff06c41a022b",
".git/objects/61/03163671929fdf7c52f07baea15f2f5735f70c": "f94a98460f680d11915d32fac780316f",
".git/objects/61/31d537817f81827dad03fe44c1d30202805c9e": "b4fa14f97812261bf7474473a759da68",
".git/objects/63/2c138924efef39842f1cc911a09b84d4ae4d84": "f16484dc28f3ae81149e319bfc64dbd6",
".git/objects/67/8c077c3d8d8cd453ebfd5531bea9f9415be501": "61f0669e40fa10a4fdba93aa8f770c71",
".git/objects/67/9c6ab4ba152549ec470ab1fac94ee731f76157": "71a9407c535fc19e5b5a7d155f8901f3",
".git/objects/67/a01c3f3b4baa693e85459d66ab9cc147dd4ce6": "5b6ba4b77de7b6b9b7a72f612d165954",
".git/objects/69/d4b8d7006c5ca19eabe02c81789c3d2997eeeb": "ab84e581fe93186a125ebb372c71bf61",
".git/objects/6a/7536ba8351758ea29506014816d0c01fa1c1ed": "260a81774402ed98df564829d44b6f38",
".git/objects/6f/9d605d1e94626726c1f5b9ad7a9f3dc87145c4": "fea6d7a12dde75c26105127e06a20811",
".git/objects/71/530822aea77162b6fca84323a2a815bd791f9f": "f5fc1045172496bad541ec4eceeccd0a",
".git/objects/73/6bee223eb19c021f38589f6d95c6b55de51672": "b5cc561d286e67361e04ffe456fca1ae",
".git/objects/77/61f9c9069f1900ceb10ec123ca8fde4ebb463f": "02400303e2a308d1d8cc3701d1dcca91",
".git/objects/78/9c02cc4f2bcb74a68f933f954e80aed778263e": "1744197ca1e46fdb0c616a8955285075",
".git/objects/7a/ba8b21e9081ddd95f93255fea8d6728a341baf": "82ede1a1bd1a42d89ace14dedf50ca1b",
".git/objects/7c/8f77d0fb7d31db75027d9b9d926cc6f63784f6": "b3b50d6c951d251c3fefc87bbef3d0d5",
".git/objects/7c/fa79e78da00787729517b093943ce30eb5bb8e": "fb1d48e3f394aca107ef5ed92c31766e",
".git/objects/82/759cae174a3ea6af31131aa65df12e1edaca60": "79d41c927abf090a19875eeecc6789d9",
".git/objects/85/cbfa88de29c801d4df0328a5dfb3bcc9456e05": "83ed9ad655e1085ec243abbe57e0827b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b0c91d367b6ade94c1fd51d8f7a0cf227be19c": "d603c031601361fb3c47dbe0d574c419",
".git/objects/8d/ad0d2fbee9925144a6b73228fed4191ef9f0dd": "8cd0b812d1299f9ab763c75bf48432d0",
".git/objects/8f/db4c865ccebff969465afe82f097f4544cba91": "aa3fbc4cc017a48b5f8d29578b04e84f",
".git/objects/92/3c6ca13cb7178f986c94f38e5a44c212f1b0e5": "873e4a4a5abdb544bd46d7f416160fb1",
".git/objects/96/f9bb58b0b168b34e28ccfd775cb8a7f2015dca": "815f2e1c49cfcc5dcdec2bbd0b787c2b",
".git/objects/9d/825e108c7c15b38e28502011be82762540d8d2": "52f80a88cdfe03f9e20e4d0e998daa86",
".git/objects/a0/6b43e43d22212560adc2aca034d0001261268d": "e54c989fa3c254d41077e9b971392b07",
".git/objects/a5/9dab942367912579c726f3757a2a8e08809b1e": "bbfb2817b286517cf90e8c7187b70867",
".git/objects/a7/4778f500471a7ee50040781deb06e55d41df13": "14b650330589d61fc0122875c599acf8",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/4294160a04e9ae32539a0483982602407a6323": "1003355ff9500284e977dd07cfd00ef7",
".git/objects/ae/d0da12b5b9cf986c58e776919ebe4d1c9700a7": "23d3c941aa3a2063f0746e4f5f46fca5",
".git/objects/b1/384e8ff3a32806e628bc1553ac7028f3245ca0": "77d0f7b4d307a7157dfcd2482fdb6a6d",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b5/0ce10cb495aa1cf5c848cd5e5f9125d4f581ab": "2a5dfcfb094a813bc790c49b0eade9ee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/dc60e56d9297bc0fd08b5e3ef3ed197c45542a": "7179def50266e662081bb4095abaa126",
".git/objects/bd/7a235563c1baf049001cce2c0fdcb1d51fd8c1": "bf0c47e5d0f80dd7be72de952b5bfd29",
".git/objects/bf/a26beaaefeae89018fc0e0670d697e8169af2d": "1c344935f4a2bae237ae618e6f46c0a0",
".git/objects/c5/1577b47be820f71ea51f7bb10d60094c5a4d49": "610989733a2209dda6e241cde74cd9de",
".git/objects/c5/431fa9aa15a9da133f93f3786155c836a6581b": "a4f63618f277ee51803928eea2d9d4aa",
".git/objects/c8/090e3f9328142ca4902f45df22e389c130d954": "b85558643784644dae5cc359c1dca3dd",
".git/objects/c8/25f41e9a33f39179fa74a0aa0377f653109f5f": "78f0eb33fa945693214f87ac32c0494c",
".git/objects/ce/ac3257ca14b2f9637995c6a487040daed25f15": "0a480d2169aeaf0bbed9c97bb614235c",
".git/objects/ce/bc61b415d5252043d5ea389183e2a329d5a3e9": "f6c32d3f384352abb1feb8ef69634795",
".git/objects/ce/e3103d18bdc76633640109cec86bfd03e9643f": "5641fdcfeb5a27e53aba5d335e924a21",
".git/objects/cf/6b225b93b70192acca96f3f7a1f519d252325e": "35ce5af47ee7f737287f8995adad3533",
".git/objects/cf/dacbe70b82db13e595ace80f7681a59574fa15": "79db8807e6d32938bad505489d1018ef",
".git/objects/d1/24921d9701c6359a20d7fb177070fd9fdc940a": "88d997b6a81461b123058567dc6c985d",
".git/objects/d5/5826515539b6661e78cc147d8ed3bae1581255": "9a0268a9af69901049498893a59014be",
".git/objects/d5/89124116419477c70523a083b2ba5ee50015da": "9b4a5d76e6c1ded71e31e8c5315870b1",
".git/objects/d6/49906a7ed846ebf3b328b9bd16bb51e1febde2": "44dabb359b835b54ca1d9d1fcdea54e7",
".git/objects/d8/1b411681a11f7d0b706ef1a88135cae9c7fff4": "4546cf87d03028638c220d65d0ed1cd3",
".git/objects/dc/7a93f69b7fa4f66f5c565bfbd64591b94e653f": "354d2ccff82688c290f51e7cc3fa58a7",
".git/objects/dd/9287500450a1353fd45d64ff0b067e4e830fda": "4634521249b32013897771376a46ccbb",
".git/objects/df/9b9ad676d8a31c660b9db21bc3b6243aec7ca3": "7a2fc34937fe2819aeeeea83d205b631",
".git/objects/e1/18fa933c385915d82f84ff9d19eeb34d1422db": "a4bad6779782980d9158f456dbf99651",
".git/objects/e1/6284e8d19226771db87e7ce00aa2033f7c5c4e": "1d4c3084eb302c47af6a67dbfe22a67e",
".git/objects/e2/de741ae6849373f5eea3118dbdceea93562ec8": "7090d5c63a3fcc41d81a3bd935186592",
".git/objects/e7/1724a2fba8632a008d97363f4d22bfd4cf12d5": "e7e2feb8b36850875fd6e27bcfbdeb4c",
".git/objects/e7/206ae35df6e7c80bb6627261092accf27e58c8": "1c4a3355a97fa739ac85350cc5d77ff7",
".git/objects/ea/c2c79ad78f983f04a8c33c205afb128829173c": "748a0a829f18ace16942ac2230610ef5",
".git/objects/eb/a8cc22922331c2cf8b58873b7917a0df8837e9": "330b95cf7171a5b05302313a7052a54b",
".git/objects/ed/578b46e45a5d123aff34c49a2bd194d949ec32": "50cd27a5432f40059fc357f4d2411302",
".git/objects/ef/4e337cc298c6cfbb92203618e7b4ea8e40b869": "18fe521a2996c2558dcf40f91f844c77",
".git/objects/f0/120afd71c077d72a2612f620231149980ab8d1": "1d63c78f0ffe40568fd49a0c756c029b",
".git/objects/f1/0843ac34234354789083078e6ca4e32896ced2": "f8d8ca1eba1db168fe46cd5b42576b63",
".git/objects/f1/cfde50f3bcd8aa731e9cab5e810e5002949faa": "918895afc38e56021c2933f607f646ea",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/493acad32b00c30185ef825c65bcf3550a7ffc": "9c847918adc3553cab41d2630370d89d",
".git/objects/f6/4d57b824851bbc328b446fd6417c9eb8af8ae9": "ca84e38873d0c30d9f94fe0706babc80",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/ff/8f9eeaa1904f36a6702cb2612e2d711c5810aa": "2c5cb6c7129c81004cd49fd6d61f9e92",
".git/objects/ff/9894d9f9f9408034642563695e530f8a9e5f94": "0325f24a1b60f6f9ccc51cc041409b20",
".git/refs/heads/master": "2e09b32c82d61aacd474b9826deceb31",
".git/refs/remotes/origin/master": "2e09b32c82d61aacd474b9826deceb31",
"assets/AssetManifest.json": "8699a35905939653053a4b63373da2d8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/background.jpg": "0bf280388937448d38392b76c15bd441",
"assets/images/background2.jpg": "0bf280388937448d38392b76c15bd441",
"assets/images/background3.png": "1666eb722120ebffa5077891abcb60e0",
"assets/images/background_wallpaper.png": "35f3e9c4b86568b4919949a9307da2a9",
"assets/images/birdfly.gif": "e27c6546116bb0521ecb8c74eb04e6f2",
"assets/images/docx.png": "5c9b76e4833003467e089894965d3846",
"assets/images/forward.png": "7b2d21d168b8e7dff87d9886ffa1ca8e",
"assets/images/img_not_available.jpeg": "1c98fa4a13575d5854365f27b8bf66dc",
"assets/images/loginUser.png": "d8ce4611411fed3fcac150ca36d7d37e",
"assets/images/mimi1.gif": "477fc8ddd40d200fe8f2635b5151a873",
"assets/images/mimi12.gif": "82a783353a27abe59feafd40bc686af1",
"assets/images/mimi2.gif": "82a783353a27abe59feafd40bc686af1",
"assets/images/mimi3.gif": "477fc8ddd40d200fe8f2635b5151a873",
"assets/images/mimi4.gif": "6b65742393c65511ba223ec388c85ecc",
"assets/images/mimi5.gif": "609127cb5129f8e218fb57f059497c87",
"assets/images/mimi6.gif": "1ce35a6b3c21cc308a7683dfbea81c63",
"assets/images/mimi7.gif": "ace546bd302229af3a0c7e7221d2dc10",
"assets/images/mimi8.gif": "6646a3dec849498313a17c7de5d2ea5c",
"assets/images/mimi9.gif": "b5ec7c32285b24c09eca4646a4511518",
"assets/images/missing.png": "7725ae5506fdf4b6af9bd9dd8ed178bb",
"assets/images/pdf.png": "0dfe1271c4feee62a37d4f324ddee500",
"assets/images/profile.png": "6d5f8b45fa283b1c6410b54e15cb2482",
"assets/images/utsav1.gif": "477fc8ddd40d200fe8f2635b5151a873",
"assets/images/whatsappbg.jpg": "3c025ba0e7ab33fcb015de084b7c204d",
"assets/images/whatsappbg.png": "c92bbf63b7915e7bfee934b4224672fe",
"assets/NOTICES": "0bf28ebad1095fec2ba06f48bdd2717e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "938b6ae3ff8f220336aeed204550c4fb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "09911137118d653bc716d58263305f84",
"/": "09911137118d653bc716d58263305f84",
"main.dart.js": "490b74dc1f8687df1f833f397f698187",
"manifest.json": "8fde876539cd3a2a79e2a3400585ca29",
"myjs.js": "79cf8f18d61ebf645a1a5836474a0704",
"version.json": "20837a6bedbf395c63167ef8450eefc6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
