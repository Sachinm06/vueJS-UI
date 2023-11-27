<template>
    <div>
        <section id="block-3-4">
            <div class="row">
                <div class="col-lg-6 col-md-12 ">
                    <div class="row" id="row-1">
                        <div class="event-listing-item">
                            <div class="event-item nested-1">
                                <div class="calander-items">
                                    <h2 class="block-title title-3-4">MENU 3</h2>
                                </div>
                            </div>
                            <div class="event-item border-btm nested-1">
                                <div class="calander-items">
                                    <div class="calander calanderEdited">
                                        <div class="calander-month">
                                            MAR
                                        </div>
                                        18
                                    </div>
                                    <div class="block-text-box">
                                        <div class="block-3-subhead">
                                            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod.
                                            </p>
                                        </div>
                                        <div class="block-date">
                                            13 -16 AUG 2020 | CAPE TOWN
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="event-item border-btm nested-1">
                                <div class="calander-items">
                                    <div class="calander">
                                        <div class="calander-month">
                                            MAR
                                        </div>
                                        22
                                    </div>
                                    <div class="block-text-box">
                                        <div class="block-3-subhead">
                                            <p>Tristique senectus et netus et. cursus sit amet dictum sit amet justo
                                                donec
                                                enimturpis... </p>
                                        </div>
                                        <div class="block-date">
                                            27 AUG 2020 | FRANKFURT
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="event-item border-btm nested-1">
                                <div class="calander-items">
                                    <div class="calander calanderEdited">
                                        <div class="calander-month">
                                            APR
                                        </div>
                                        14
                                    </div>
                                    <div class="block-text-box">
                                        <div class="block-3-subhead">
                                            <p>A erat nam at lectus urna duis convallis convallis tellus.</p>
                                        </div>
                                        <div class="block-date">
                                            06 -14 SEP 2020 | MELBOURNE
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="button-container3 text-center ">
                                <button class="button-container primary-button  view-btn-2">
                                    VIEW ALL
                                    <div class="arr"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="row" id="row-2">
                        <div class="event-listing-item-2">
                            <div class="event-item menu-3-4-head nested-2">
                                <div class="calander-items">
                                    <h2 class=" block-title title-3-4">MENU 4</h2>
                                </div>
                            </div>
                            <div class="event-item border-btm2 nested-2">
                                <div class="calander-items">
                                    <div class="nested-img">
                                        <img src="../assets/images/172_112_1.jpg" alt="">
                                    </div>
                                    <div id="menu4P">
                                        <div class="block-3-subhead">
                                            <p> Quis imperdiet massa tincidunt nunc amet nisl purus in mollis nunc
                                                sed. </p>
                                        </div>
                                        <div class="block-date block-4-date">
                                            26 AUGUST 2020
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="event-item border-btm2 nested-2">
                                <div class="calander-items">
                                    <div class="nested-img">
                                        <img src="../assets/images/172_112_2.jpg" alt="">
                                    </div>
                                    <div id="menu4P">
                                        <div class="block-3-subhead">
                                            <p>Dignissim enim sit amet venenatis urna.</p>
                                        </div>
                                        <div class="block-date block-4-date">
                                            12 AUGUST 2020
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="event-item border-btm2 nested-2">
                                <div class="calander-items">
                                    <div class="nested-img">
                                        <img src="../assets/images/172_112_3.jpg" alt="">
                                    </div>
                                    <div id="menu4P">
                                        <div class="block-3-subhead">
                                            <p>Amet nisl purus in mollis nunc sed id semper risus. Dignissim enim
                                                sit
                                                amet.</p>
                                        </div>
                                        <div class="block-date block-4-date">
                                            21 JULY 2020 </div>
                                    </div>
                                </div>
                            </div>
                            <div class="button-container3 text-center ">
                                <button class="button-container primary-button  view-btn-2">
                                    VIEW ALL
                                    <div class="arr"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#block-3-4 {
    color: var(--color-content-1);
    position: relative;
    background: url('../assets/images/1920_808.jpg') center/cover no-repeat;
    overflow-x: hidden;
}

#block-3-4 #row-1 {
    background-color: #04a0a08a;
    /* opacity: 0.7; */
    height: 830px;
}



#row-2 {
    background: #002e5d8a;
    /* opacity: 0.7; */
    height: 830px;
}


#block-3-4 .event-listing-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: start;
    margin-top: 30px;
}

#block-3-4 .event-listing-item-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    /* margin-bottom: auto; */
}

.title-3-4 {
    color: var(--color-content-1);
}

.nested-1 {
    margin-left: auto;
    margin-right: 50px;
    margin-top: inherit;
}

.nested-2 {
    margin-right: auto;
    width: 80%;
    margin-left: 45px;
}

.event-item {
    width: 72%;
}

.block-3-4-head {
    margin-bottom: 16px;
    font-family: var(--avenir-medium);
    font-size: 42px;
}

.calander-items {
    display: flex;
    margin-bottom: -5px;
}

.calander {
    width: 100px;
    height: 100px;
    background: var(--color-content-1);
    color: var(--color-secondary);
    display: grid;
    text-align: center;
    font-size: 55px;
    font-family: var(--avenir-light);
}

.calanderEdited {
    margin-bottom: 17px;
}

.calander-month {
    width: 100px;
    height: 25px;
    background: var(--color-content-6);
    color: var(--color-content-1);
    font-size: 14px;
    font-family: var(--avenir-black);
}

.calander-items p {
    /* margin-left: 49px; */
    font-size: 1.3rem;
    line-height: 27px;
    font-family: var(--avenir-medium);
    margin-bottom: inherit;
}

#menu4P {
    margin-left: 30px;
}

.calander-items p span {
    font-size: .8rem;
    font-family: var(--avenir-book);
    display: block;
}

.block-date {
    margin-top: 16px;
    font-size: .8rem !important;
}

.nested-img {
    width: 172px;
    height: 112px;
    margin-bottom: 32px;
    margin-top: 4px;
}

.nested-2 .calander-items span {
    color: var(--color-content-5);
    font-size: .8rem;
}

.border-btm {
    border-bottom: var(--color-content-1) 1px solid;
    padding-bottom: 22px;
}

.border-btm2 {
    border-bottom: var(--color-content-1) 1px solid;
    padding-top: 22px;
}

.menu4Button {
    margin-top: 26px;
}

.block-3-subhead {
    font-size: 1.3rem;
    text-align: start;
}

.block-text-box {
    margin-left: 50px;
}

.block-4-date {
    color: var(--color-content-5);
    font-size: .8rem;
    text-align: start;
}

/* ----- */

@media screen and (max-width: 600px) {
    .menu4Button {
        margin-bottom: 0px;
    }

    .block-3-subhead {
        font-size: .7rem !important;

    }

    .block-date {
        font-size: .6rem !important;
    }

    .calander-items p {
        font-size: .8rem !important;

    }
}

@media screen and (max-width: 665px) {
    #menu4P {
        margin-bottom: 10px;
    }
}

@media only screen and (max-width: 600px) {
    .view-btn-2 {
        margin-bottom: 20px;
    }

}

@media screen and (max-width: 1260px) {
    #block-3-4 #row-1 {
        height: 100%;
    }

    #row-2 {
        height: 100%;
    }

}

@media screen and (max-width: 1252px) {
    .calander-items {
        padding-bottom: 10px;
    }
}

@media screen and (max-width: 1240px) {
    .viewbtn1 {
        margin-top: 20px;
    }
}

@media screen and (max-width: 1350px) {
    .block-3-subhead {
        font-size: .8rem;

    }

    .block-date {
        font-size: .7rem;
    }
}
</style>