import Button from "./Button"

const Cta = () => {
  return (
    <section className='py-[29px] px-5'>
      <div className="container bg-[url(/images/news-banner.png)] bg-no-repeat bg-cover bg-center max-w-[976px] w-full py-[51px] rounded-[20px]">
        <h2 className="text-white">Subscribe our newsletter</h2>
        <p className="mt-[10px] mb-[28px] max-w-[551px] mx-auto text-center text-white font-medium">Join thousands of marketers and entrepreneurs for a 2-day event at the forefront of social commerce.</p>
      <Button text={"Subscribe"} className={"mx-auto"} />
      </div>

    </section>
  )
}

export default Cta