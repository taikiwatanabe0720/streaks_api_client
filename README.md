### 開発環境

nodejs 20.12.2

npm 8.19.4

### インストール方法

yarn add streaks_api_client

または

npm install streaks_api_client

### サンプルコード
```
import { MediaClient } from "streaks_api_client"
import { apiCredential } from './settings/settings';

// apiCredentialの中身はprojectIdとapiKeyのみ
// 例: {projectId: "logiclogic", apiKey: "*******"}
const client = new MediaClient(apiCredential);

async function test() {
  try {
    // mediaIdを引数に渡す
    const medias = await client.getMedia( ※32桁のhash値 );
    console.log(medias);
  } catch (error) {
    console.error(error);
  }
}

test();
```
