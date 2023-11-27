<template>
    <div>
        <footer id="footer">
            <section class="container-fluid footer-area py-5">
                <div class="container footer-div">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-5 ">
                                    <div class="footer-part">
                                        <ul>
                                            <li> <a href="#block"> MENU</a> </li>
                                            <li> <a href="#block1"> MENU 1</a> </li>
                                            <li> <a href="#block-2"> MENU 2</a> </li>
                                            <li> <a href="#block-3-4"> MENU 3</a> </li>
                                            <li> <a href="#block-3-4"> MENU 4</a> </li>
                                            <li> <a href="#footer"> MENU 5</a> </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-7 px-4 footer-part" id="social-media">
                                    <h5>CONNECT WITH US</h5>
                                    <div id="navlist">
                                        <a class="twitter social-icon" href="https://twitter.com/home"></a>
                                        <a class="facebook social-icon" href="https://www.facebook.com/"></a>
                                        <a class="youtube social-icon" href="https://www.youtube.com/"></a>
                                        <a class="instagram social-icon" href="https://www.instagram.com/"></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-5" id="subscribe">
                            <h6> Subscribe to our Newsletter</h6>
                            <form class="form-footer my-3">
                                <input type="text" placeholder="E-mail" name="search">
                                <input type="button" value="SUBSCRIBE">
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div id="sub-footer">
                <p class="sub-footerP">Copyright © dolor sit amet, consecte tuer adipiscing elit, All rights reserved. |
                    <a href="https://en.wikipedia.org/wiki/Terms_of_service">Terms &
                        Conditions</a>
                    <a href="https://en.wikipedia.org/wiki/List_of_types_of_fraud">| Fraud Alert</a>
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer'

}
</script>

<style  scoped>
.footer-area {
    background: var(--color-footer);
}

.footer-area {
    color: var(--color-content-1);
    display: flex;
    text-align: center;
}

.footer-area h6 {
    position: relative;
    font-size: 1rem;
    font-family: var(--avenir-black);
    color: var(--color-content-1);
}

.footer-div {
    margin-top: -10px;
    margin-bottom: -10px;
}

.form-footer input[type="text"] {
    border: 1px solid var(--color-content-1);
    background: var(--color-content-1);
    font-size: .8rem;
    padding: 5.7px;
    margin-right: 5px;
}

::placeholder {
    color: var(--color-content-4);
    font-size: .8rem;
    padding-left: 10px;
    font-family: var(--avenir-book);
}

.form-footer input[type="button"] {
    border: 1px solid;
    font-size: .9rem;
    background: transparent;
    margin-left: -5px;
    color: var(--color-content-1);
    padding: 5px;
    font-family: var(--avenir-medium);
}

.footer-area ul li {
    list-style: none;
    display: block;
    margin-bottom: -5px;
}

.footer-area ul li a {
    text-decoration: none;
    color: var(--color-content-1);
    text-decoration: none;
    font-size: .9rem;
    font-family: var(--avenir-medium);
}

.footer-part {
    border-right: 1px solid var(--color-footer-border);
    height: 153px;
    text-align: start;
    padding-left: 100px;
}

#social-media {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: auto;
}

#social-media h5 {
    font-size: 1rem;
    font-family: var(--avenir-black);
    color: var(--color-content-1);
}

#subscribe {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 50px;
}

#sub-footer {
    display: flex;
    justify-content: center;
    font-size: .9rem;
    color: var(--color-footer-sub);
    align-items: center;
    height: 60px;
    background: var(--color-footer-sub-bg);
    font-family: var(--avenir-roman);
}

.sub-footerP {
    display: contents;
}

#navlist {
    display: flex;
    gap: 5px;
}
.social-icon {
    background: url('../assets/images/social_media.png') no-repeat 0 0;
    cursor: pointer;
    height: 45px;
    width: 45px;
}

.twitter {
    background-position: 0 0;
}

.facebook {
    background-position: -52px 0;
}

.youtube {
    background-position: -105px 0;
}

.instagram {
    background-position: -159px 0;
}
#sub-footer .sub-footerP a {
    text-decoration: none;
    color: var(--color-footer-sub);
}

/* --- */

@media screen and (max-width: 770px) {
    .form-footer {
        display: flex;
    }
    #social-media {
        display: flex;
        flex-direction: column;
    }
}
@media screen and (max-width: 767px) {
    .footer-part {
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
    }
    #subscribe {
        display: flex !important;
        align-items: center !important;
    }
}

@media only screen and (max-width: 990px) {
    .footer-area h6 {
        display: none;
    }

    .footer-area ul li a {
        font-size: .5rem;
    }

    .footer-part {
        border: none;
        padding-left: 0px;
    }

    #social-media h5 {
        display: flex;
        flex-direction: column;
        font-size: .8rem;
    }

    #subscribe {
        display: block;
    }

    #sub-footer {
        font-size: .5rem;
    }
}

</style>