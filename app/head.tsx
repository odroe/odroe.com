import fluidicon from '../assets/fluidicon.png';

export default function Head() {
  return (
    <>
      <title>One dream, One life | Odroe</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="One dream, One life" />
      <link rel="icon" href={fluidicon.src}  />
      <link rel="icon" href="/odroe.svg" type="image/svg+xml" />
    </>
  )
}
