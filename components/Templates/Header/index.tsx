import React from 'react';

const Header = () => {
  return (
    <header className="page-header">
      <div className="banners-container" id="banners-container"></div>
      <div className="sticky-container">
        <div className="sticky-navigation pos-relative row sticky is-stuck is-at-top">
          {/*    */}
          <div className="top-header-row grid-x">
            <div className="left-container cell small-3 large-6">
              {' '}
              <span data-responsive-toggle="visual-menu" style={{ display: 'none' }}>
                {' '}
                <button data-toggle="visual-menu">
                  <svg aria-hidden="true">
                    {' '}
                    <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#hamburger-menu"></use>
                  </svg>{' '}
                  <span className="visuallyhidden"> Open mobile navigation </span>{' '}
                </button>{' '}
              </span>{' '}
              <a id="toggle-mobile-search" className="toggle-mobile-search hide-for-large" href="#">
                <svg aria-hidden="true">
                  <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#search"></use>
                </svg>
                <span className="visuallyhidden">Toggle mobile search</span>{' '}
              </a>{' '}
              <a
                className="w-icon small show-for-large storelocator-cta"
                href="https://www.bulgari.com/en-int/storelocator"
                data-en="Find a Store"
                aria-label="Find a Store"
              >
                <svg aria-labelledby="account">
                  <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#marker"></use>
                </svg>
                <span>Find a Store</span>{' '}
              </a>{' '}
              <a
                className="w-icon small show-for-large services"
                href="https://www.bulgari.com/en-int/services"
                data-en="Services"
                aria-label="Services"
              >
                <svg aria-hidden="true">
                  <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#services"></use>
                </svg>
                <span>Services</span>{' '}
              </a>{' '}
              <a
                className="w-icon small show-for-large contact-us"
                href="https://www.bulgari.com/en-int/contact-us--info.html"
                data-en="Contact Us"
                aria-label="Contact Us"
              >
                <svg aria-hidden="true">
                  <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#support"></use>
                </svg>
                <span>Contact Us</span>{' '}
              </a>
              <div className="search-container">
                <form
                  action="https://www.bulgari.com/en-int/search"
                  method="get"
                  name="simpleSearch"
                >
                  <svg aria-hidden="true">
                    <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#search"></use>
                  </svg>
                  <div className="spinner small">
                    <span></span>
                  </div>
                  <input
                    id="search-input-h"
                    className="form-control search-field"
                    type="search"
                    name="q"
                    defaultValue="1"
                    placeholder="Search"
                    aria-label="Search, screen reader users press tab once to go to an accessible search."
                  />
                  <input type="hidden" value="default" name="lang" />
                </form>
              </div>
              <a
                id="search-btn-ada"
                className="button small search--btn__ada no-margin margin-right-1"
                aria-label="acessible search page"
                href="https://www.bulgari.com/en-int/searchpage"
              >
                Search{' '}
              </a>
            </div>
            <div className="middle-header-row cell auto hide-for-large">
              <div className="logo-container">
                <span className="visuallyhidden">Bulgari</span>{' '}
                <a href="https://www.bulgari.com/en-int/" aria-label="Bulgari home, logo">
                  <svg role="img" aria-label="homepage link">
                    <use xlinkHref="https://www.bulgari.com/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#logo"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="right-container cell small-3 large-6">
              <a
                className="w-icon small show-for-large newsletter"
                href="https://www.bulgari.com/en-int/newsletter"
                data-en="Newsletter"
              >
                <svg aria-hidden="true">
                  <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#newsletter"></use>
                </svg>
                <span>Newsletter</span>{' '}
                <img
                  className="animated-icon newsletter"
                  alt="icon gif"
                  src="/assets/gif/newsletter.gif"
                />
              </a>{' '}
              <a
                className="w-icon show-for-large"
                data-logged="false"
                href="https://www.bulgari.com/en-int/login"
                data-en="My Account"
                aria-label="My Account"
              >
                <svg aria-hidden="true">
                  <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#user"></use>
                </svg>
                <span>My Account</span>{' '}
                <img className="animated-icon user" alt="icon gif" src="/assets/gif/user.gif" />
              </a>{' '}
              <a
                className="w-icon show-for-large"
                href="https://www.bulgari.com/en-int/wishlist"
                data-en="My Wishlist"
                data-wishlist-json="https://www.bulgari.com/on/demandware.store/Sites-INT-Site/default/Wishlist-GetListJson"
                aria-label="My Wishlist (0)"
              >
                <svg aria-hidden="true">
                  <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#wishlist"></use>
                </svg>
                <span>
                  My Wishlist{' '}
                  <span className="wishlist-quantity" data-qty="0">
                    (0)
                  </span>
                </span>{' '}
              </a>{' '}
              <a
                className="w-icon hide-for-large storelocator-cta"
                href="https://www.bulgari.com/en-int/storelocator"
                data-en="Store Locator"
              >
                <svg aria-hidden="true">
                  <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#marker"></use>
                </svg>
                <span className="visuallyhidden">Store Locator</span>{' '}
              </a>{' '}
              <a
                className="w-icon hide-for-large"
                href="https://www.bulgari.com/en-int/wishlist"
                data-en="My Wishlist"
                data-wishlist-json="https://www.bulgari.com/on/demandware.store/Sites-INT-Site/default/Wishlist-GetListJson"
                aria-label="My Wishlist (null)"
              >
                <svg aria-hidden="true">
                  <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#wishlist"></use>
                </svg>
              </a>
            </div>
          </div>
          <div className="middle-header-row show-for-large">
            <div className="logo-container">
              <span className="visuallyhidden">Bulgari</span>{' '}
              <a href="https://www.bulgari.com/en-int/" aria-label="Bulgari home, logo">
                <svg role="img" aria-label="homepage link">
                  <use xlinkHref="https://www.bulgari.com/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#logo"></use>
                </svg>
              </a>
            </div>
          </div>
          <>
            <nav id="visual-menu" style={{ width: '100%', minHeight: '40px' }}>
              <div className="visual-menu-header">
                <button
                  data-close=""
                  className="hide-for-large"
                  type="button"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <svg aria-hidden="true" width="20" height="20">
                    <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#close"></use>
                  </svg>
                </button>
                <section className="visual-menu-logo-container hide-for-large">
                  <span className="visuallyhidden">Bulgari</span>
                  <a href="https://www.bulgari.com/en-int/" aria-label="Bulgari home, logo">
                    <svg role="img" aria-label="homepage link" width="385" height="39">
                      <use xlinkHref="https://www.bulgari.com/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#logo"></use>
                    </svg>
                  </a>
                </section>
              </div>
              <ul
                role="menubar"
                data-aria-label="secondary"
                className="vertical large-horizontal menu menu-category dropdown"
                data-click-open="true"
                data-close-on-click-inside="false"
                data-responsive-menu="drilldown large-dropdown"
                data-back-button='<li className="js-drilldown-back"><a tabindex="-1"> Back</a></li>'
                data-auto-height="true"
                style={{}}
                data-dropdown-menu="qtkkao-dropdown-menu"
                data-mutate="07ikhw-responsive-menu"
                data-events="mutate"
              >
                <li
                  className="menu-category-item null"
                  data-id="BHigh_Jewellery"
                  data-layout=""
                  role="none"
                >
                  <a
                    className="text-uppercase"
                    href="https://www.bulgari.com/en-int/high-jewellery/aeterna"
                    role="menuitem"
                  >
                    High Jewellery
                  </a>
                </li>
                <li
                  className="menu-category-item null is-dropdown-submenu-parent opens-right"
                  data-id="B74336"
                  data-layout="type_2"
                  role="none"
                  data-is-click="false"
                >
                  <a
                    className="text-uppercase"
                    href="https://www.bulgari.com/en-int/jewellery"
                    role="menuitem"
                    aria-haspopup="true"
                    aria-label="Jewellery"
                  >
                    Jewellery
                  </a>
                  <ul
                    className="subCat submenu menu vertical is-dropdown-submenu first-sub"
                    // className="subCat submenu menu vertical is-dropdown-submenu first-sub js-dropdown-active"
                    data-vm-focus-trap=""
                    data-submenu=""
                    role="menubar"
                    style={{}}
                  >
                    <li
                      className="js-drilldown-back-custom hide-for-large is-submenu-item is-dropdown-submenu-item"
                      role="none"
                    >
                      <a role="menuitem">
                        <svg aria-hidden="true">
                          <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#arrow-left"></use>
                        </svg>
                        Jewellery{' '}
                      </a>
                    </li>
                    <li
                      className="main-grid-scroll subCat-item has-submenu analytics-menu-list kl-ref-74338 is-dropdown-submenu-parent is-submenu-item is-dropdown-submenu-item opens-right"
                      data-id="74338"
                      data-layout="button"
                      role="none"
                      data-is-click="false"
                    >
                      <a
                        className="visual-menu-section-title"
                        href="https://www.bulgari.com/en-int/jewellery/by-category"
                        data-gtm="view_all"
                        role="menuitem"
                        aria-haspopup="true"
                        aria-label=" By category |&nbsp;View All "
                      >
                        {' '}
                        <strong className="text-uppercase">By category</strong>{' '}
                        <span className="show-for-large">
                          |&nbsp;<span className="text-underline">View All</span>
                        </span>{' '}
                      </a>
                      <ul
                        className="subSubCat submenu menu vertical visual-menu-items-type-button is-dropdown-submenu"
                        data-submenu=""
                        role="menubar"
                        style={{}}
                      >
                        <li
                          className="js-drilldown-back-custom hide-for-large is-submenu-item is-dropdown-submenu-item"
                          role="none"
                        >
                          <a role="menuitem">
                            <svg aria-hidden="true">
                              <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#arrow-left"></use>
                            </svg>
                            By category{' '}
                          </a>
                        </li>
                        <li
                          className="subSubCat-button-item has-submenu is-submenu-item is-dropdown-submenu-item"
                          data-id="74339"
                          role="none"
                        >
                          <a href="https://www.bulgari.com/en-int/jewellery/rings" role="menuitem">
                            Rings
                          </a>
                        </li>
                        <div className="view-all-mobile-button-wrapper hide-for-large">
                          <a
                            className="display-inline-block button hollow"
                            href="https://www.bulgari.com/en-int/jewellery/by-category"
                            data-gtm="view_all"
                            role="menuitem"
                          >
                            {' '}
                            View All Jewellery{' '}
                          </a>
                        </div>
                      </ul>
                    </li>
                    <li
                      className="main-grid-scroll analytics-menu-list kl-ref-74390 is-submenu-item is-dropdown-submenu-item"
                      data-layout="thumbnail"
                      role="none"
                    >
                      <div className="visual-menu-thumbnail-wrapper">
                        <a
                          className="visual-menu-section-title"
                          href="https://www.bulgari.com/en-int/jewellery/by-category"
                          data-gtm="view_all"
                          role="menuitem"
                        >
                          {' '}
                          <strong className="text-uppercase">By collection</strong>
                          <span className="show-for-large">
                            |&nbsp;<span className="text-underline">View All</span>
                          </span>
                        </a>
                        <ul className="menu visual-menu-items-type-thumbnail">
                          <li className="subSubCat-thumbnail-item" data-id="74391" role="none">
                            <a
                              href="https://www.bulgari.com/en-int/jewellery/b-zero1"
                              role="menuitem"
                            >
                              {' '}
                              <img
                                src="./Fine Italian Jewellery, Watches and Luxury Goods _ BULGARI India_files/1479838.png"
                                width="280"
                                height="280"
                                loading="lazy"
                                alt="B.zero1"
                                role="presentation"
                              />{' '}
                              <span>B.zero1</span>{' '}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="view-all-mobile-button-wrapper hide-for-large">
                        <a
                          className="display-inline-block button hollow"
                          href="https://www.bulgari.com/en-int/jewellery"
                          data-gtm="view_all"
                          role="menuitem"
                        >
                          {' '}
                          View All Jewellery{' '}
                        </a>
                      </div>
                    </li>
                    <li
                      className="visual-menu-col-wrapper analytics-menu-list kl-ref-210095 first is-submenu-item is-dropdown-submenu-item"
                      data-layout="list"
                      role="none"
                    >
                      <div className="visual-menu-col first">
                        <a
                          className="visual-menu-section-title"
                          href="https://www.bulgari.com/en-int/jewellery/bvlgari-picks"
                          role="menuitem"
                        >
                          {' '}
                          <strong className="text-uppercase">Bvlgari Picks</strong>
                        </a>
                        <ul className="menu vertical visual-menu-items-type-list">
                          <li className="subSubCat-list-item" data-id="210418" role="none">
                            <a
                              href="https://www.bulgari.com/en-int/jewellery/new-in"
                              role="menuitem"
                            >
                              New in
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      className="visual-menu-content-wrapper is-submenu-item is-dropdown-submenu-item"
                      role="none"
                    >
                      <div className="visual-menu-content">
                        <div className="container content-asset-container">
                          <article>
                            <div
                              className="wg wg-position wg3x-link-container wg3x-slider slick-carousel slick-to-init slick-initialized slick-slider slick-dotted"
                              data-carousel="wg3x_slider"
                            >
                              <button
                                className="slick-prev slick-arrow slick-disabled"
                                aria-label="Previous Slide"
                                aria-disabled="true"
                                style={{ display: 'inline-block' }}
                              >
                                <span className="show-for-sr">Previous Slide</span>
                                <svg>
                                  <use xlinkHref="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780//images/sprite.svg#arrow-left"></use>
                                </svg>
                              </button>
                              <div className="slick-list draggable">
                                <div className="slick-track" style={{ opacity: '1', width: '0px' }}>
                                  <div
                                    className="wg3x-slide slick-slide slick-current slick-active"
                                    data-slick-index="0"
                                    role="tabpanel"
                                    id="slick-slide00"
                                    aria-describedby="slick-slide-control00"
                                    style={{
                                      width: '0px',
                                      position: 'relative',
                                      left: '0px',
                                      top: '0px',
                                      zIndex: '999',
                                      opacity: '1',
                                    }}
                                  >
                                    <section className="wg3x-top-wrapper" data-name="wg3x">
                                      <div
                                        className="wg3x-top-media-wrapper-large"
                                        style={{ paddingBottom: '145%' }}
                                      >
                                        <img
                                          className="wg3x-top-media-large"
                                          alt="Serpenti bracelets in rose and white gold with diamonds."
                                          src="./Fine Italian Jewellery, Watches and Luxury Goods _ BULGARI India_files/menu-serpenti-infinito-sfcc-2_x0iwh2.jpg"
                                          loading="lazy"
                                        />
                                      </div>
                                    </section>
                                    <div className="wg wg3x" style={{ paddingBottom: '145%' }}>
                                      <div
                                        className="wg3x-container"
                                        data-wg-justify="center"
                                        data-wg-align="top"
                                      >
                                        <div
                                          className="wg3x-section-wrapper"
                                          data-wg-background="transparent"
                                        >
                                          <div
                                            className="wg3x-content-wrapper"
                                            data-wg-text-color="black"
                                            data-wg-text-align="center"
                                          >
                                            <h3>SERPENTI INFINITO</h3>
                                            <div className="wg3x-slider-cta-box">
                                              <a
                                                className="button"
                                                href="https://www.bulgari.com/en-int/jewellery/serpenti"
                                                role="menuitem"
                                              >
                                                DISCOVER THE CREATIONS
                                              </a>{' '}
                                              <a
                                                className="button"
                                                href="https://www.bulgari.com/en-int/collection/serpenti.html"
                                                role="menuitem"
                                              >
                                                DISCOVER THE COLLECTION
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="wg3x-slide slick-slide"
                                    data-slick-index="1"
                                    role="tabpanel"
                                    id="slick-slide01"
                                    aria-describedby="slick-slide-control01"
                                    style={{
                                      width: '0px',
                                      position: 'relative',
                                      left: '0px',
                                      top: '0px',
                                      zIndex: '998',
                                      opacity: '0',
                                    }}
                                  >
                                    <section className="wg3x-top-wrapper" data-name="wg3x">
                                      <div
                                        className="wg3x-top-media-wrapper-large"
                                        style={{ paddingBottom: '145%' }}
                                      >
                                        <img
                                          className="wg3x-top-media-large"
                                          alt="Bvlgari Tubogas bracelets."
                                          src="./Fine Italian Jewellery, Watches and Luxury Goods _ BULGARI India_files/menu-tubogas_rq88bs.jpg"
                                          loading="lazy"
                                        />
                                      </div>
                                    </section>
                                    <div className="wg wg3x" style={{ paddingBottom: '145%' }}>
                                      <div
                                        className="wg3x-container"
                                        data-wg-justify="center"
                                        data-wg-align="top"
                                      >
                                        <div
                                          className="wg3x-section-wrapper"
                                          data-wg-background="transparent"
                                        >
                                          <div
                                            className="wg3x-content-wrapper"
                                            data-wg-text-color="black"
                                            data-wg-text-align="center"
                                          >
                                            <h3>Tubogas Collection</h3>
                                            <div className="wg3x-slider-cta-box">
                                              <a
                                                className="button"
                                                href="https://www.bulgari.com/en-int/jewellery/bvlgari-tubogas_1"
                                                role="menuitem"
                                              >
                                                DISCOVER THE CREATIONS
                                              </a>{' '}
                                              <a
                                                className="button"
                                                href="https://www.bulgari.com/en-int/collection/bvlgari-tubogas.html"
                                                role="menuitem"
                                              >
                                                DISCOVER THE COLLECTION
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="wg3x-slide slick-slide"
                                    data-slick-index="2"
                                    role="tabpanel"
                                    id="slick-slide02"
                                    aria-describedby="slick-slide-control02"
                                    style={{
                                      width: '0px',
                                      position: 'relative',
                                      left: '0px',
                                      top: '0px',
                                      zIndex: '998',
                                      opacity: '0',
                                    }}
                                  >
                                    <section className="wg3x-top-wrapper" data-name="wg3x">
                                      <div
                                        className="wg3x-top-media-wrapper-large"
                                        style={{ paddingBottom: '145%' }}
                                      >
                                        <img
                                          className="wg3x-top-media-large"
                                          alt="Bzero1 rings in rose, yellow and white gold."
                                          src="./Fine Italian Jewellery, Watches and Luxury Goods _ BULGARI India_files/banner_352x510px-1x-jbu1_zzsmmm.png"
                                          loading="lazy"
                                        />
                                      </div>
                                    </section>
                                    <div className="wg wg3x" style={{ paddingBottom: '145%' }}>
                                      <div
                                        className="wg3x-container"
                                        data-wg-justify="center"
                                        data-wg-align="top"
                                      >
                                        <div
                                          className="wg3x-section-wrapper"
                                          data-wg-background="transparent"
                                        >
                                          <div
                                            className="wg3x-content-wrapper"
                                            data-wg-text-color="black"
                                            data-wg-text-align="center"
                                          >
                                            <h3>B.ZERO1 JEWELRY</h3>
                                            <div className="wg3x-slider-cta-box">
                                              <a
                                                className="button"
                                                href="https://www.bulgari.com/en-int/jewellery/b-zero1"
                                                role="menuitem"
                                              >
                                                DISCOVER THE CREATIONS
                                              </a>{' '}
                                              <a
                                                className="button"
                                                href="https://www.bulgari.com/en-int/configurator"
                                                role="menuitem"
                                              >
                                                FIND YOUR RING
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="wg3x-slide slick-slide"
                                    data-slick-index="3"
                                    role="tabpanel"
                                    id="slick-slide03"
                                    aria-describedby="slick-slide-control03"
                                    style={{
                                      width: '0px',
                                      position: 'relative',
                                      left: '0px',
                                      top: '0px',
                                      zIndex: '998',
                                      opacity: '0',
                                    }}
                                  >
                                    <section className="wg3x-top-wrapper" data-name="wg3x">
                                      <div
                                        className="wg3x-top-media-wrapper-large"
                                        style={{ paddingBottom: '145%' }}
                                      >
                                        <img
                                          className="wg3x-top-media-large"
                                          alt="Bulgari Cabochon 18 kt yellow gold ring with Bulgari logo engraving inside, neutral backdrop."
                                          src="./Fine Italian Jewellery, Watches and Luxury Goods _ BULGARI India_files/cabochon-menu-sfcc_hhmjeb.jpg"
                                          loading="lazy"
                                        />
                                      </div>
                                    </section>
                                    <div className="wg wg3x" style={{ paddingBottom: '145%' }}>
                                      <div
                                        className="wg3x-container"
                                        data-wg-justify="center"
                                        data-wg-align="top"
                                      >
                                        <div
                                          className="wg3x-section-wrapper"
                                          data-wg-background="transparent"
                                        >
                                          <div
                                            className="wg3x-content-wrapper"
                                            data-wg-text-color="black"
                                            data-wg-text-align="center"
                                          >
                                            <h3>BVLGARI CABOCHON</h3>
                                            <div className="wg3x-slider-cta-box">
                                              <a
                                                className="button"
                                                href="https://www.bulgari.com/en-int/jewellery/bvlgari-cabochon"
                                                role="menuitem"
                                              >
                                                DISCOVER THE CREATIONS
                                              </a>{' '}
                                              <a
                                                className="button"
                                                href="https://www.bulgari.com/en-int/collection/cabochon.html"
                                                role="menuitem"
                                              >
                                                DISCOVER THE COLLECTION
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <button
                                className="slick-next slick-arrow"
                                aria-label="Next Slide"
                                style={{}}
                                aria-disabled="false"
                              >
                                <span className="show-for-sr">Next Slide</span>
                                <svg>
                                  <use xlinkHref="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780//images/sprite.svg#arrow-right"></use>
                                </svg>
                              </button>
                              <ul className="slick-dots" style={{}} role="tablist">
                                <li className="slick-active" role="none">
                                  <button
                                    type="button"
                                    role="tab"
                                    id="slick-slide-control00"
                                    aria-controls="slick-slide00"
                                    aria-label="1 of 4"
                                    aria-selected="true"
                                  >
                                    1
                                  </button>
                                </li>
                                <li role="none">
                                  <button
                                    type="button"
                                    role="tab"
                                    id="slick-slide-control01"
                                    aria-controls="slick-slide01"
                                    aria-label="2 of 4"
                                  >
                                    2
                                  </button>
                                </li>
                                <li role="none">
                                  <button
                                    type="button"
                                    role="tab"
                                    id="slick-slide-control02"
                                    aria-controls="slick-slide02"
                                    aria-label="3 of 4"
                                  >
                                    3
                                  </button>
                                </li>
                                <li role="none">
                                  <button
                                    type="button"
                                    role="tab"
                                    id="slick-slide-control03"
                                    aria-controls="slick-slide03"
                                    aria-label="4 of 4"
                                  >
                                    4
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </article>
                        </div>
                      </div>
                      <button
                        className="visual-menu-close"
                        type="button"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <svg aria-hidden="true" width="15" height="15">
                          <use href="/on/demandware.static/Sites-INT-Site/-/default/v1744289292780/images/sprite.svg#close"></use>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </>
        </div>
      </div>
    </header>
  );
};

export default Header;
