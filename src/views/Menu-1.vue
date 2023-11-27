<template>
    <div>
        <section id="block1">
            <h2 class="text-center block-title"> MENU 1</h2>
            <article class="container m1">
                <div class="row">
                    <div class="col-lg-1"></div>

                    <div class="col-lg-6 col-md-12 first-column">
                        <!-- First Column -->
                        <div class="row lorem-page">
                            <div class="publication">
                                <img src="../assets/images/publication.png" alt="">
                            </div>
                            <div class="col-lg-6 col-md-12 main-card">
                                <img src="../assets/images/274_355.jpg" alt="" class="m1img">
                            </div>
                            <div class="col-lg-6 col-md-12 lorem-div">
                                <div class="lorem-caption">
                                    <div class="lorem-h1">
                                        Lorem ipsum </div>
                                    <div class="lorem-p1">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                            sed diam nonummy
                                            nibh euis- mod tincidunt ut</p>
                                    </div>
                                    <div class="lorem-p2">
                                        <a href="https://www.lipsum.com/">Ut wisi enim ad minim veniam, quis nostrud
                                            exerci tation
                                            ullamcorper suscipit
                                            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="block-btn-div">
                            <button class="button-container4 secondary-button" id="">
                                LEARN MORE
                                <div class="image-button">
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 m1second ">
                        <!-- Second Column -->
                        <div class="column-1">
                            <div class=" LoremImg">
                                <img src="../assets/images/198_256_1.jpg" alt="" class="m1img2">
                            </div>
                            <div class="text-box">
                                <div class=" container lorem-text">
                                    <div class="report-txt1">
                                        LOREM
                                    </div>
                                    <div class="report-txt2">
                                        <a href="https://www.lipsum.com/">Ut wisi enim ad
                                            minim veniam, quis nostrud exerci tation
                                            ullamcorper suscipit
                                        </a>
                                    </div>
                                </div>
                                <div class="block-btn-2">
                                    <button class="button-container4 secondary-button" id="">
                                        LEARN MORE
                                        <div class="image-button">
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column-1">
                                <div class="LoremImg">
                                    <img src="../assets/images/198_256_2.jpg" alt="">
                                </div>
                                <div class="text-box">
                                    <div class=" lorem-text container">
                                        <div class="report-txt1">
                                            LOREM IPSUM DOLOR </div>
                                        <div class="report-txt2">
                                            <a href="https://www.lipsum.com/">Ut wisi enim
                                                ad minim veniam, quis nostrud exerci
                                            </a>
                                        </div>
                                    </div>
                                    <div class="block-btn-2">
                                        <button class="button-container4 secondary-button" id="">
                                            LEARN MORE
                                            <div class="image-button">
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-lg-1 "></div> -->
                </div>
            </article>
            <div class="button-container3 text-center">
                <button class="button-container primary-button buttonB view-btn">
                    VIEW ALL
                    <div class="arr arr-1"></div>
                </button>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
#block1 {
    margin-top: 4.375rem;
}

.publication {
    position: relative;
    top: 0;
    display: flex;
    align-items: flex-end;
    justify-content: end;
}

.main-card {
    margin-left: -15px;
}

#block1 h2 {
    margin-bottom: 2.3rem;
}

#block1 article .lorem-page {
    padding: 3.1rem;
    background-color: var(--color-primary);
    height: 582px;
}

#block1 article .lorem-page p {
    margin-left: 1.43rem;
    text-align: start;
}

#block1 article .LoremImg {
    width: 198px;
    margin-left: 2.5rem;
}

.lorem-h1 {
    color: var(--color-content-1);
    font-family: var(--avenir-book);
    font-size: .8rem;
    text-transform: uppercase;
    margin-left: 25px;
    margin-bottom: 20px;
    text-align: start;
}

.lorem-p1 {
    font-family: var(--avenir-medium);
    font-size: 1.3rem;
    color: var(--color-content-1);
    line-height: 1.7rem;
    width: 100% !important;
    margin-top: -11px;
}

.lorem-div {
    display: flex;
    align-items: center;
}

.lorem-p2 {
    font-family: var(--avenir-medium);
    font-size: 1rem;
    color: var(--color-content-1);
    width: 110%;
    line-height: 26px;
    margin-top: -3px;
    margin-left: 25px;
    text-align: start;
}

.lorem-p2 a {
    text-decoration: none;
    color: var(--color-content-1);

}

.lorem-text {
    background-color: #E6E7E8;
    width: 210px !important;
    height: 256px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.text-box {
    width: auto !important;
    margin-left: 5px;
    height: 100%;
    /* Ensure the container takes full height */

}

/* ---------------- */
.report-txt1 {
    font-size: .8rem;
    color: var(--color-content-3);
    font-family: var(--avenir-medium);
    margin-bottom: 7px;
}

.report-txt2 {
    font-size: 1.1rem;
    color: var(--color-secondary);
    font-family: var(--avenir-medium);
    text-align: start;
}

.report-txt2 a {
    margin-bottom: 8px;
    text-decoration: none;
    color: var(--color-secondary);

}

.column-1 {
    margin-bottom: 2.5rem;
    display: flex;
    margin-left: -5px;
}

/* ----- */

@media only screen and (max-width: 550px) {
    .lorem-text {
        width: auto !important;

    }

    .m1img2 {
        width: auto !important;

    }
}

@media screen and (max-width: 768px) {
    #block1 article .lorem-page {
        height: auto;
    }

    .lorem-caption {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
}

@media screen and (max-width: 770px) {
    #block1 article .lorem-page p {
        margin-left: 0px;

    }

    .lorem-h1 {
        font-size: 8px;
        color: var(--color-content-1);
    }

    .lorem-p1 {
        width: auto;
    }

    .lorem-p2 {
        font-size: 10px;
        color: var(--color-content-1);
    }

    .report-txt1 {
        font-size: 8px;
    }

    .report-txt2 {
        font-size: 13px;
    }

    .column-1 {
        display: flex;
        justify-content: center;
    }
}

@media screen and (max-width: 991px) {
    .m1 {
        text-align: center;
    }
}

@media screen and (max-width: 1000px) {
    .main-card {
        display: flex;
        justify-content: center;
    }
}

@media screen and (max-width: 990px) {
    .lorem-caption {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

@media screen and (max-width: 1003px) {
    #block1 article .LoremImg {
        margin-left: 0px;
    }
}

@media screen and (max-width: 992px) {
    .m1second {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

@media screen and (max-width: 990px) {
    #btn-1 {
        margin-bottom: 1.9rem;
    }
}

@media screen and (max-width: 1200px) {

    .col-lg-1:nth-child(1),
    .col-lg-1:nth-child(4) {
        display: none;
    }
}

@media screen and (max-width: 1400px) {
    .lorem-p1 {
        font-size: .8rem;
        color: var(--color-content-1);
    }

    .main-card {
        display: flex;
        align-items: center;
    }

    .m1img {
        width: 228px;
    }
}</style>