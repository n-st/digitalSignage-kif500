<template>
	<section id="kif500">
		<nuxt/>

		<img src="~/assets/img/kif500/kif500.svg" alt="" id="kiflogo">
	</section>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/futura-md-bt');

[id='kif500'] {
	width: 100vw;
	height: 100vh;

	margin: 0 !important; 
	padding: 0 !important;
}
.heading {
    /* Schrift groß 3.3cm */
    /* top 4.5cm-8.3cm / 2.6cm-8.6cm */
	font-family: 'Futura Md BT', sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 3.3cm;
	margin-top: -5cm !important;
}
.subline {
    /* Schrift klein 2.3cm */
	font-family: 'Futura Md BT', sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 2.3cm;
	margin-top: -0.5cm !important;
}

#kiflogo {
	/* Breite Logo 8.9cm */
	position: absolute;
	height: auto;
	width: 8.9cm;
	/* margin Logo 2.5cm right 1cm bottom */
	bottom: 1cm;
	right: 2.5cm;
}
</style>
