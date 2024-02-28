import Image from "next/image";

const user = {
    nama : 'Rizki',
    umur : 23,
    alamat : 'Jakarta',
    foto : 'https://placekitten.com/200/200'
}

function MyButton() {
  return <button>Click me</button>;
}


function Hello() {
  return <h1>Hello World</h1>;
}

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ol>
        <li>saya</li>
        <li>makan</li>
        <li>nasi</li>
      </ol>
    </div>
  );
}
