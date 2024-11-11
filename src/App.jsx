import CautionToast from "./components/toasts/CautionToast";
import ErrorToast from "./components/Toasts/ErrorToast";
import SuccessToast from "./components/toasts/SuccessToast";

import PrimaryButton from "./components/Buttons/PrimaryButton";
import SecondaryButton from "./components/Buttons/SecondaryButton";
import BaseButton from "./components/Buttons/BaseButton";

import Card from "./components/cards/Card";
import GlassCard from "./components/cards/GlassCard";
import Iphone from "./components/phones/Iphone";

const App = () => {

  return (
    <>
      <div className="home w-full h-screen p-10 space-y-10 text-white">
        <section className="space-y-10">
            <SuccessToast />
            <ErrorToast />
            <CautionToast />
        </section>

        <section className="flex gap-10 items-center">
          <PrimaryButton />
          <SecondaryButton />
          <BaseButton />
        </section>

        <section className="flex gap-10">
          <Card className="flex items-center justify-center">
            <SecondaryButton />
          </Card>
          <GlassCard className="flex items-center justify-center">
            <PrimaryButton />
          </GlassCard>
        </section>

        <section className="flex">
          <Iphone>
            <div 
            className="lockScreen w-full h-full rounded-[33px] flex items-center justify-center bg-center bg-cover bg-no-repeat"
            style={{backgroundImage: `url('/wp.jpg')`}}
            >
              <h2 className="text-5xl font-extrabold">12:12</h2>
            </div>
          </Iphone>
        </section>
      </div>
    </>
  )
}

export default App;
