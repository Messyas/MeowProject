import CardWithInput from './components/CardComEntrada';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-12 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex min-h-screen items-center justify-center bg-gray-950">
      <CardWithInput />
     </main>
    </div>
  );
}
