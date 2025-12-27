import editorial1 from "@/assets/editorial-1.jpg";
import editorial2 from "@/assets/editorial-2.jpg";
import editorial3 from "@/assets/editorial-3.jpg";
import editorial4 from "@/assets/editorial-4.jpg";
import DomeGallery from '@/components/DomeGallery';

const images = [
  editorial1,
  editorial2,
  editorial3,
  editorial4,
];

const Test = () => {
  return (
<div>
    <div style={{ width: '100vw', height: '100vh' }}>
      <DomeGallery />
    </div>
</div> 
  );
}

export default Test;