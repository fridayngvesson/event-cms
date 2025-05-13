import { Hero } from "@/components/sections/hero";
import { Events } from "@/components/sections/events";

function HomePage() {
return (
<div className='wrapper'>
  <Hero />
  <Events title="Kommande Events" limit={4} showLink={true} />
</div>
  )
}
export default HomePage;

