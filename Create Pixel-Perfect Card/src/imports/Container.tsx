import imgImage from "figma:asset/ab1956eaceab89a09af8c08ed1246cd3db056a69.png";

function Image() {
  return (
    <div className="h-[221px] pointer-events-none relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div className="absolute inset-0 overflow-hidden rounded-[16px]">
        <img alt="" className="absolute h-full left-[-16.74%] max-w-none top-0 w-[169.13%] transition-transform duration-500 group-hover:scale-110" src={imgImage} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#007bff] border-solid inset-0 rounded-[16px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[185px] relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[15px] relative size-full">
          <Image />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-h-px min-w-px not-italic relative text-[#002d5b] text-[20px] text-center tracking-[-0.4492px] whitespace-pre-wrap">Junior Developers</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#002d5b] text-[16px] text-center tracking-[-0.3125px] whitespace-pre-wrap">Build solid foundations in modern development practices.</p>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Contents">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#007bff] border-solid border-t inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,45,91,0.08)]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Contents />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div 
      className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] size-full transition-transform duration-300 hover:scale-105 group" 
      data-name="Container"
    >
      <Frame1 />
      <Frame />
    </div>
  );
}