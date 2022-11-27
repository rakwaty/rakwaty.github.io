function navbar(e) {
  let position = document.getElementById(e).offsetTop;
  let xs = window.matchMedia("(max-width: 394px)");
  let sm = window.matchMedia("(min-width: 395px) and (max-width: 767px)");
  let md = window.matchMedia("(min-width: 768px) and (max-width: 991px)")
  let lg = window.matchMedia("(min-width: 992px) and (max-width: 1199px)");
  let xlg = window.matchMedia("(min-width: 1200px)");
  if (xs.matches) {
    scrollTo(0, position - 140);
  }
  if (sm.matches) {
    scrollTo(0, position - 120);
  }
  if (md.matches) {
    scrollTo(0, position - 90);
  }
  if (lg.matches) {
    scrollTo(0, position - 130);
  }
  if (xlg.matches) {
    scrollTo(0, position - 100);
  }
}