export function MainContent(props) {
  const dogUrl = "img/husky.jpg";

  return (
    <main>
      <p>lorem ipsum</p>
      <p>Math: {1+2+3+340}</p>
      <div className="flex-container">
        <DoggyPicture />
        <DoggyPicture />
        <DoggyPicture />
        <DoggyPicture />
      </div>
      
    </main>
  )
}

function DoggyPicture(props) {
  const dogUrl = "img/husky.jpg";

  return (
    <div>
      <p><img src={dogUrl} alt="a dog" /></p>
      <p>A doggy</p>
    </div>
  )
}
