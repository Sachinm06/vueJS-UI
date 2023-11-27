<template>
    <div>
        <header>
            <div class="brand-logo">
                <a class="navbar-brand " href="#">
                    <img src="../assets/images/Logo.png" alt="lorem logo" class="logo" @click="goToHome">
                </a>
            </div>

            <!-- ------navigation section-------- -->


            <nav class="navbar navbar-expand-lg navBar">
                <div class="container-fluid menuIcon">
                    <button class="navbar-toggler" type="button" @click="toggleNavbar">
                        {{ isOpen ? 'X' : '☰' }}
                    </button>
                </div>
                <div class="collapse navbar-collapse me-5" v-bind:class="{ 'show': isOpen }">
                    <ul class="navbar-nav">
                        <li class="nav-item" @click="goToMenu">
                            <a class="nav-link active" href="#block">MENU</a>
                        </li>
                        <li class="nav-item" @click="goToMenu1">
                            <a class="nav-link active" href="#block1">MENU 1</a>
                        </li>
                        <li class="nav-item" @click="goToMenu2">
                            <a class="nav-link active" href="#block-2">MENU 2</a>
                        </li>
                        <li class="nav-item" @click="goToMenu3and4">
                            <a class="nav-link active" href="#block-3-4">MENU 3</a>
                        </li>
                        <li class="nav-item" @click="goToMenu3and4">
                            <a class="nav-link active" href="#block-3-4">MENU 4</a>
                        </li>
                    </ul>
                    <div class="sm-search">
                        <input type="text" class="custom-input" placeholder="Search" aria-label="Search">
                    </div>
                </div>
            </nav>
            <!-- ------search area----------- -->
            <div class="search-area">
                <div class="search-icon">
                    <div @click="toggleSearch" :class="{ 'toggle-image': true, 'close': isClose }"></div>
                </div>
                <div :class="{ 'hidden': isHidden, 'search': true }" id="inputBox">
                    <input id="speechToText" type="text" class="search__input" placeholder="Search">
                    <button class="search__button">
                        <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                            <g>
                                <path
                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                </path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </header>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isHidden: true,
            isClose: false,
            isOpen: false,
        };
    },
    methods: {
        toggleNavbar() {
            this.isOpen = !this.isOpen;
        },
        toggleSearch() {
            this.isHidden = !this.isHidden;
            this.isClose = !this.isClose;
        },
        goToHome() {
            this.$router.push('/');
        },
        goToMenu() {
            this.$router.push('/menu');
        },
        goToMenu1() {
            this.$router.push('/menu-1');
        },
        goToMenu2() {
            this.$router.push('/menu-2');
        },
        goToMenu3and4() {
            this.$router.push('/menu-3,4');
        }
    },
};

</script>

<style  scoped>
header {
    display: flex;
    height: 100px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    background: var(--color-content-1);
}


.brand-logo {
    display: flex;
    align-items: center;
}

.navbar-brand {
    margin-left: 6rem;
}

.navbar-toggler .close-icon::before {
    content: "✕";
    /* Unicode character */
}

.navbar-toggler span.navbar-toggler-icon::before {
    content: "";
}

nav {
    position: sticky !important;
    top: 0px !important;
    width: 100%;

}

.collapse.show {
    background-color: var(--color-content-1);
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    margin-top: 1rem;

}

#navbarNav {
    margin-right: 1rem !important;
}

.search-area {
    padding-right: 4rem;

}

.navbar-nav {
    display: flex;
    margin-top: 46px;
}

.navbar-nav li {
    margin-right: 1.5rem;
}

.navbar-nav a {
    white-space: nowrap;
}

.navbar-nav .nav-link.active {
    color: var(--color-primary) !important;
    font-size: 15px;
    font-family: var(--avenir-black)
}

.navbar-nav .nav-link.active:hover {
    color: var(--color-secondary) !important;
}


.search-icon {
    display: inline-block;
    position: relative;
    left: 0;
    top: 65px;
    width: 2.6rem;
    z-index: 1000;
}

.search__icon {
    height: 1.5rem;
    margin-top: auto;
}

.custom-input {
    border-radius: 1rem;
}


.sm-search {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

.toggle-image {
    cursor: pointer;
}

.hidden {
    display: none;
}

.search {
    position: absolute;
    top: 135px;
    right: 3.5rem !important;
    z-index: 3;
}

.search__input {
    background-color: var(--color-content-1);
    border: none;
    color: var(--color-content-3);
    padding: 0.7rem 1rem;
    border-radius: 3rem;
    width: 15rem;
    transition: all ease-in-out .5s;
    margin-right: -2.5rem;
    font-family: var(--avenir-light);
}

.search__input::placeholder {
    font-size: .7rem;
}

.search__input:hover,
.search__input:focus {
    box-shadow: 0px 4px 20px -1px var(--color-shadow-1);
}

.search__input:focus {
    outline: none;
    background-color: var(--color-content-1);
}

.search__button {
    border: none;
    background: transparent;
}

.search__button:hover {
    cursor: pointer;
}

.toggle-image {
    width: 50px;
    height: 50px;
    background-image: url('../assets/images/search.png');
    background-size: cover;
}

@media only screen and (max-width: 300px) {
    .logo {
        width: 50px;
    }
}

@media only screen and (max-width: 550px) {
    .slide-text {
        left: 3vw;
    }

    .navbar-brand {
        margin-left: 4vw;
    }
}

@media screen and (max-width: 900px) {
    .logo {
        width: 100px;
    }

    .search__input {
        box-shadow: 0px 4px 20px -1px var(--color-shadow-1);
    }

    header {
        display: flex;
        flex-direction: column;
    }

    .brand-logo {
        margin-top: 30px;
    }

    .navBar {
        margin-top: -43px;
    }
}

@media screen and (max-width: 991px) {
    #navbarNav {
        margin-left: 10px;
    }

    .search-area {
        display: flex;
        justify-content: center;
    }

    .navbar-nav {
        display: flex;
        text-align: center;
        align-items: center;
    }

    .search-icon {
        display: none;
    }

    .custom-input {
        display: block;
        border: 2px solid var(--color-secondary);
        display: flex;
        text-align: center;
        font-size: 17px;
    }

    #inputBox {
        display: none;
    }

    .menuIcon {
        display: flex;
        justify-content: end !important;
    }

    .custom-input {
        display: block;
    }

    #toggleImage {
        display: none !important;
    }
}

@media screen and (min-width: 992px) {
    .custom-input {
        display: none;
    }
}

@media only screen and (max-width: 1200px) {
    #inputBox {
        margin-left: -101px;
    }

    .navbar-nav li {
        margin-right: 0px !important;
    }
}
</style>