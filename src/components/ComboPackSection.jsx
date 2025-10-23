// Assets imported from Figma
import imgProductDetailIcon from "../assets/bfb05bf5c5f5986bc10a5569f2c0ab6c5c2f27ba.png";
import imgProductDetailIcon1 from "../assets/8ee42a379b81e26555d085b481112d13b428aaab.png";
import imgProductDetailIcon2 from "../assets/dc8c85473ea6aac28e8af2e38e1066230ffe9d88.png";
import imgProductDetailIcon3 from "../assets/ac87189359b91a382dfaa3c223b684bafb8be754.png";
import imgBundleProductImage from "../assets/d4f9d7594b36a5f7b678518d6df5059adb905a28.png";
import imgBundleProductImage1 from "../assets/ebb6aa35ee8c175887e2ed4005fc650179f51af6.png";

const ComboPackSection = () => {
  const products = [
    {
      id: 1,
      name: "Hair Oil",
      icon: imgProductDetailIcon,
    },
    {
      id: 2,
      name: "Hair Shampoo", 
      icon: imgProductDetailIcon1,
    },
    {
      id: 3,
      name: "Hair Conditioner",
      icon: imgProductDetailIcon2,
    },
    {
      id: 4,
      name: "Hair Capsules",
      icon: imgProductDetailIcon3,
    }
  ];

  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  return (
    <div className="w-full  md:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-xl space-y-8">
            {/* Badge and Heading */}
            <div className="space-y-4 lg:space-y-5">
              <div className="inline-flex items-center px-3 py-1 bg-[#feee95] border border-[#feee95] rounded-full">
                <span className="font-semibold text-sm text-[#1e1e1e]">
                  Recommended
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#181d27] leading-tight">
                Combo Pack
              </h2>
            </div>

            {/* Description */}
            <p className="text-base lg:text-lg text-[#535862] leading-6 lg:leading-7">
              Use the full range together for faster<br className="hidden lg:block" />
              <span className="lg:hidden"> </span>and long-lasting results.
            </p>

            {/* Product Icons Grid */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
                {products.map((product, index) => (
                  <div key={product.id} className="flex items-center gap-3 lg:gap-5">
                    <div className="w-12 h-12 lg:w-15 lg:h-15 border border-[#d5d7da] rounded-lg flex items-center justify-center bg-white p-2">
                      <img 
                        src={product.icon} 
                        alt={product.name}
                        className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                        onError={handleImageError}
                      />
                    </div>
                    <span className="text-sm lg:text-lg font-medium text-[#181d27]">
                      {product.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 max-w-2xl w-full">
            <div className="bg-white border-[0.6px] border-[rgba(0,0,0,0.08)] rounded-2xl lg:rounded-3xl p-1">
              <div className="bg-white border-[1px] border-[#e9eaeb] rounded-xl lg:rounded-2xl p-1 ">
                  <div className="relative w-full aspect-[1.2] lg:aspect-[1.48] min-h-[280px] lg:min-h-[400px]">
                    <img 
                      src={imgBundleProductImage} 
                      alt="Combo Pack Products" 
                      className="absolute inset-0 w-full h-full object-cover rounded-lg lg:rounded-xl"
                      onError={handleImageError}
                    />
                    <img 
                      src={imgBundleProductImage1} 
                      alt="Combo Pack Products with Ribbon" 
                      className="absolute inset-0 w-full h-full object-cover rounded-lg lg:rounded-xl"
                      onError={handleImageError}
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboPackSection;