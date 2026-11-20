/**
 * First-visit intro. Pure CSS animation (see .studio-pre in globals.css), so it
 * can never block the page if JavaScript fails. The inline script skips it on
 * repeat visits in the same session.
 */
export default function Preloader() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "try{if(sessionStorage.getItem('js-intro')){document.documentElement.classList.add('no-intro')}else{sessionStorage.setItem('js-intro','1')}}catch(e){document.documentElement.classList.add('no-intro')}",
        }}
      />
      <div className="studio-pre" aria-hidden="true">
        <div className="display text-[#161310] text-center leading-[.85]" style={{ fontSize: "clamp(64px, 12vw, 180px)" }}>
          <div className="pre-word"><span>JAYANT</span></div>
          <div className="pre-word"><span style={{ animationDelay: ".22s" }}>SYSTEMS</span></div>
        </div>
      </div>
    </>
  );
}
