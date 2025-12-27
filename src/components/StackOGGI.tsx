import Stack from '@/components/Stack'
import editorial1 from "/img/1.jpg";
import editorial2 from "/img/2.jpg";
import editorial3 from "/img/3.jpg";
import editorial4 from "/img/4.jpg";
import editorial5 from "/img/5.jpg";
import editorial6 from "/img/6.jpg";
import editorial7 from "/img/7.jpg";
import editorial8 from "/img/8.jpg";
import editorial9 from "/img/9.jpg";
import editorial10 from "/img/10.jpg";
import editorial11 from "/img/11.jpg";
import editorial12 from "/img/12.jpg";
import editorial13 from "/img/13.jpg";
import editorial14 from "/img/14.jpg";
import editorial15 from "/img/15.jpg";
import editorial16 from "/img/16.jpg";
import editorial17 from "/img/17.jpg";
import editorial18 from "/img/18.jpg";
import editorial19 from "/img/19.jpg";
import editorial20 from "/img/20.jpg";

const images = [
  editorial1,
  editorial2,
  editorial3,
  editorial4,
  editorial5,
  editorial6,
  editorial7,
  editorial8,
  editorial9,
  editorial10,
  editorial11,
  editorial12,
  editorial13,
  editorial14,
  editorial15,
  editorial16,
  editorial17,
  editorial18,
  editorial19,
  editorial20
];
const StackOGGI = () => {
  return (
<div className="min-h-screen flex flex-col items-center justify-center gap-6">

      <div className="w-[512px] h-[512px]">
        <Stack
          randomRotation
          sensitivity={180}
          sendToBackOnClick
          cards={images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`card-${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ))}
        />
      </div>
    </div>
  );
}
export default StackOGGI;