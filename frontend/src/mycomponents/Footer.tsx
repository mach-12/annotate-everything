export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            href="/"
            className="font-bold text-xl bg-gradient-to-r  from-emerald-500 to-lime-600 text-transparent bg-clip-text transition-all duration-300 hover:from-lime-600 hover:to-emerald-500  hover:bg-clip-text"
          >
            {" "}
            Annotate Everything
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow Me</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Github
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Twitter
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Kaggle
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Blogs</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Blog A
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Blog B
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Blog C
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Features
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Built with
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Source Code
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Annotate Everything made by{" "}
          <a
            target="_blank"
            href="https://github.com/mach-12"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Mann Acharya
          </a>
        </h3>
      </section>
    </footer>
  );
};
