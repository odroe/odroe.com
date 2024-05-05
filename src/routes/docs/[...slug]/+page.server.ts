export const prerender = true;

export async function load(event) {
  console.log(event.params.slug);
  return { a: 1 };
}
