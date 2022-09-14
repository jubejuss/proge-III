export default function Home() {
  return (
    <>
      <main>
        <section class="hero">
          <div class="copyblock">
            <h1>The best product in the world</h1>
          </div>
          <picture>
            <img src="./images/city.jpg" alt="city" />
          </picture>
          <div class="gradient-overlay"></div>
        </section>
        <section class="copy">
          <div class="copyblock">
            <h2>Really good product</h2>
            <p>Using this product makes you feel good</p>
          </div>
        </section>
        <section id="products" class="products">
          <div class="copyblock">
            <h2>Shop now</h2>
            <p>Choose the most suitable product</p>
          </div>
          <div class="holdcontent">
            <a href="./product.html" class="product">
              <div class="holdproduct">
                <div class="img">
                  <img src="./images/city2.jpg" alt="city 2" />
                </div>
                <div class="title">
                  <h4>Product 2</h4>
                </div>
              </div>
            </a>
            <a href="./product.html" class="product">
              <div class="holdproduct">
                <div class="img">
                  <img src="./images/city3.jpg" alt="city 3" />
                </div>
                <div class="title">
                  <h4>Product 2</h4>
                </div>
              </div>
            </a>
            <a href="./product.html" class="product">
              <div class="holdproduct">
                <div class="img">
                  <img src="./images/city4.jpg" alt="city 4" />
                </div>
                <div class="title">
                  <h4>Product 2</h4>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
