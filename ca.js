var navBar = document.getElementById('nav-bar');
var activeClass = 'nav-link-active';




function getTheClosest(el, selector) {
    var elParent = el.parentElement;
    while(el && elParent) {
        if (elParent === elParent.parentElement.querySelector(selector)) {
            return elParent;
        } else {
            elParent = elParent.parentElement;
        }
    }
    return null;
}



function activateNavLink(activeLink) {
    let activeLinkId = activeLink.getAttribute('id');
    let theClosestNav = getTheClosest(activeLink, 'nav');
    let notActiveLinks = theClosestNav.querySelectorAll('a:not([id=' + activeLinkId + '])');
    activeLink.classList.add(activeClass);
    notActiveLinks.forEach(notActiveLink => {
        notActiveLink.classList.remove(activeClass);
    });
}






function scroll(content) {
    const windowHeight = window.innerHeight;
    const scrollEffectHeight = content.offsetTop - windowHeight / 2;
    let navLinkHref = '#' + content.getAttribute('id');
    let navLink = navBar.querySelector('a[href="' + navLinkHref + '"]');

    if(document.body.scrollTop > scrollEffectHeight || document.documentElement.scrollTop > scrollEffectHeight) {
        activateNavLink(navLink);

    } else {
        navLink.classList.remove(activeClass);
    }
}



