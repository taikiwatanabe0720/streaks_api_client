import  MediaClient from '../clients/mediaClient';

describe("MediaClient", () => {
  test('get one media', async () => {
    const client = new MediaClient({apiKey: "7b6ca2083e3845d39de15dde480db39c", projectId: "logiclogic"});
    const media = await client.getMedia('80a87fabdc6f4c1588b1ed45006693c2');
    expect(media).toHaveProperty('id', '80a87fabdc6f4c1588b1ed45006693c2');
    expect(media).toHaveProperty('name', 'wata_test');
    expect(Array.isArray(media.tracks)).toBe(true);
  });
})
