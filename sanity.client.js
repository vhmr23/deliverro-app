import sanityCli from "@sanity/cli";
import imageUrl from "@sanity/image-url";

const client = sanityCli({
    projectId: "k2u199q4",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-03-25",
});

const builder = imageUrl(client);
export const urlFor = (source) => builder.image(source);

export default client;