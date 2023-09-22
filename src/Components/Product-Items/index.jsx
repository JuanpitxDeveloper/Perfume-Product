import Product from "/image-product-mobile.png" 
import ProductDesktop from "/image-product-desktop.jpg"
import iconCart from "/icon-cart.svg"
export default function ProductDetails() {
    return (
    <main className="w-screen h-[100vh] grid place-content-center  bg-[#f2ebe3] px-[16px] md:flex md:flex-row md:justify-center md:items-center" >
    <article className="bg-white rounded-2xl md:flex md:flex-row md:flex-nowrap ">

        <div className="relative">
  {/* Imagen móvil (se oculta en dispositivos de escritorio) */}
<img className="w-[22rem] h-[15rem] rounded-t-2xl sm:hidden" src={Product} alt="imagen-mobile" />

  {/* Imagen de escritorio (se muestra en dispositivos de escritorio) */}
<img className="hidden sm:block w-[18rem] h-[26rem] rounded-l-2xl" src={ProductDesktop} alt="Imagen-desktop" />
</div>




        <div className=" flex flex-col mx-6 px-0 md:w-[240px]">
            <h6 className="opacity-60 mt-6 text-xs		">
            P  E  R  F  U  M  E
            </h6>
            <h1 className="  tracking-wide leading-8  mt-3 mx- font-bold text-4xl md:mt-6  ">
            Gabrielle Essence Eau De Parfum
            </h1>
            <p className="opacity-60 mt-4 font-medium md:mt-6">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div>
                <h3 className="text-[hsl(158,36%,37%)] mt-5 text-3xl md:mt-5	
">
                $149.99 <strike className="pl-5 text-black opacity-60">$169.99
                </strike>
                </h3>
            </div>
            <button className=" bg-[hsl(158,36%,37%)] rounded-lg text-white py-3.5 mb-6 mt-2 flex justify-center md:mt-3 "><img src={iconCart} alt="icon-cart" className=" mr-3" /><span>
                Add to Cart</span> 
                
            </button>
            
        </div>
    </article>
    </main>
)
}
