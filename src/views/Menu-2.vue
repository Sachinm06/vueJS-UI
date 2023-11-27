<template>
    <div>
        <section id="block-2">
            <h2 class="text-center block-title">MENU 2</h2>
            <div class="container">
                <div class="row ">
                    <!-- First Column -->
                    <div class="col-lg-6 col-md-12 block-2-img">
                        <div class="menu-img image-container">
                            <img src="../assets/images/546_354.jpg" alt="" style="width:546p ;">
                            <div class="image-text">
                                <div class="block-2-head">
                                    LOREM IPSUM | MAR 2020 </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                        diam
                                        nonummy nibh...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="button-container4 secondary-button primary-button btn-4" id="">
                            LEARN MORE
                            <button class="image-button">
                            </button>
                        </div>
                    </div>
                    <!-- Second Column -->
                    <div class="col-lg-6 col-md-12 block-2-second" style="width:auto ;">
                        <div class="row">
                            <div class="card-div">
                                <div class="child-1">
                                    <img src="../assets/images/232_150_1.jpg" class="card-img" alt="...">
                                    <div class="container">
                                        <div class="card1">
                                            LOREM IPSUM | MAR 2020 </div>
                                        <div class="card2">
                                            <a href="https://www.lipsum.com/">Lorem ipsum dolor sit amet, consecte tuer
                                                adipiscing elit,
                                                sed
                                                diam
                                                nonum...</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-btn-2 block-btn-3">
                                    <button class="button-container4 secondary-button" id="">
                                        LEARN MORE
                                        <div class="image-button">
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div class="card-div">
                                <div class="child-2">
                                    <img src="../assets/images/232_150_2.jpg" class="card-img" alt="...">
                                    <div class="container">
                                        <div class="card1">
                                            LOREM IPSUM | MAY 2020 </div>
                                        <div class="card2">
                                            <a href="https://www.lipsum.com/">Tamcorper suscipit lobortis nisl ut
                                                aliquipexea comm odo
                                                consequat...</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-btn-2 block-btn-3">
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
            </div>
            <div class="button-container3 text-center block-2-btn">
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

<style scoped>
#block-2 {
    background-color: #F1F1F2;
}

#block-2 .container-fluid {
    display: flex;
    justify-content: center;
}

#block-2 h2 {
    margin-bottom: 50px;
    padding-top: 70px;
}

#block-2 .child-1 {
    background-color: var(--color-content-1);
    height: 354px;
    width: 232px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#block-2 .child-2 {
    background-color: var(--color-content-1);
    height: 354px;
    width: 232px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#block-2 .block-2-img {
    width: 546px;
    height: 354px;
    margin-right: 80px;
}

.block-2-head {
    font-size: .8rem;
    margin-bottom: 17px;
    color: var(--color-content-1);
    font-family: var(--avenir-book);
}

#block-2 .card-img {
    width: 232px;
    height: 150px;
}

#block-2 .row {
    display: flex;
    justify-content: center;
}

.card1 {
    color: var(--color-primary);
    font-size: .8rem;
    font-family: var(--avenir-book);
    margin-top: 20px;
    margin-bottom: 1.25rem;
}

.card2 {
    color: var(--color-content-3);
    font-family: var(--avenir-medium);
    margin-top: -14px;
    font-size: 1.1rem;
}

.card2 a {
    text-decoration: none;
    color: var(--color-content-3);

}

#viewAll {
    margin-bottom: 70px;
}

#block-2 .card-item {
    width: 232px;
}

#block-2 .card-div {
    width: 232px;
    margin-right: 50px;
}

.image-container {
    position: relative;
    display: inline-block;
    width: 546px;
}

.image-container img {
    max-width: 100%;
    height: 354px;
    display: block;
}

.image-text {
    position: absolute;
    top: 80%;
    left: 50%;
    /* commonly used to center an element both horizontally and vertically within its parent container. */
    transform: translate(-50%, -50%);
    color: var(--color-content-1);
    font-size: 21px;
    width: 90%;
    font-family: var(--avenir-medium);
}

.block-2-btn {
    margin-top: 70px;
}

.block-2-button {
    width: 217px;
    margin-left: 15px;
}

.btn-4 {
    margin-top: -6px;
    margin-right: -24px;
}

/* ---- */

@media only screen and (max-width: 600px) {
    .image-text {
        font-size: .7rem;
    }
}
@media screen and (max-width: 800px) {
    .image-text {
        width: 75%;
    }
    .block-2-second {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #block-2 .row {
        display: contents;
    }
    #block-2 .block-2-img {
        width: auto;
        height: auto;
        margin-bottom: 3.1rem;
        overflow: hidden;
        background-size: contain;
        display: contents;
    }
}

@media screen and (max-width: 770px) {
    #block-2 .child-1 {
        margin-bottom: 40px;
    }
    .btn-4 {
        margin-right: 0px;
    }
}
@media screen and (min-width: 767px) and (max-width: 801px) {
    .btn-4 {
        margin-right: 72px;
    }
}
@media screen and (max-width: 990px) {
    .btn-4 {
        margin-bottom: 40px;
    }
    #viewAll {
        margin-bottom: 30px;
    }
}
@media screen and (max-width: 900px) {
    .image-container {
        width: auto;
    }
}
@media screen and (max-width: 1200px) {
    #block-2 .block-2-img {
        margin-right: 0px;

    }
}
@media screen and (min-width: 1200px) {
    #block-2 .block-2-img {
        margin-right: 0px;

    }
}
@media screen and (max-width: 1400px) {
    #block-2 .block-2-img {
        margin-bottom: 50px;
    }
    .image-container {
        width: -webkit-fill-available;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btn-4 {
        margin-top: 0px;
        margin-right: 0px;
    }
}

@media only screen and (min-width: 1200px) {
  .block-2-second {
    margin-left: 50px;
  }
}

</style>