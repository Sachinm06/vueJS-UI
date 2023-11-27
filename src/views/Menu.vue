<template>
    <div>
        <section>
            <div class="block-0" id="block">
                <article class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 block-img">
                            <img src="../assets/images/logo_watermark.png" alt="" class="watermark">
                        </div>
                        <div class="col-lg-5 col-md-5 block-txt">
                            <div>
                                <h2 class="block-title">MENU</h2>
                            </div>
                            <div>
                                <p class="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                    nibh
                                    euismod
                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                    veniam,
                                    quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                    commodo
                                    consequat. Duis autem vel eum
                                </p>
                            </div>
                            <button class="button-container2 mbutton primary-button-2 primary-button buttonM">
                                LEARN MORE
                                <div class="image-button image-button-background">
                                </div>
                            </button>
                        </div>
                        <div class="col-lg-1 col-md-1"></div>
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.block-0 {
    position: relative;
    background: url('../assets/images/banner_Menu_1920_600.jpg');
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 600px;
}

.block-0 .container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.block-title {
    font-family: var(--avenir-medium);
    font-size: 2.6rem;
    font-weight: 500;
    color: var(--color-secondary);
    text-align: start;
}


.block-0 p {
    font-size: 1.1rem;
    margin-top: 30px;
    color: #231f20;
    font-family: var(--avenir-roman);
    line-height: 28px;
    text-align: start;
}

.block-txt {
    margin-left: 2rem;
    margin-top: 80px;

}

.block-img {
    display: flex;
    justify-content: center;
}

/* ------- */

@media only screen and (max-width: 450px) {
    .block-img {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .block-img img {
        width: 300px;
    }

    .block-0 p {
        width: 100%;
        font-size: .6rem;
    }
}

@media screen and (max-width: 767px) {
    .block-0 .container h2 {
        font-size: 2rem;
        color: var(--color-secondary);
        margin-top: 1rem;
    }

    .block-0 p {
        font-size: 13px;
        color: var(--color-content-1);
        margin-top: 0;
    }

    .block-txt {
        margin-left: 0;
    }

}

@media screen and (max-width: 770px) {
    .block-txt {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -5rem;

    }

}
</style>