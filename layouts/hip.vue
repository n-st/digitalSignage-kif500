<template>
	<section id="hip">
		<nuxt/>

    <img src="~/assets/img/hip/hip_logo.svg" alt="" id="typo" class="absolute">
	</section>
</template>

<style lang="scss">
@import '../assets/fonts/hip/stylesheet.scss';

[id='hip'] {
	width: 100vw;
	height: 100vh;

	margin: 0 !important; 
	padding: 0 !important;

  background-image: url('~/assets/img/hip/logowall_opt.svg');
  background-color: #222;
  color: #ffffff;


	.heading {
		font-family: 'shareTech';
		font-size: 90pt;
	}
	.subline {
    font-family: 'shareTech';
		text-transform: lowercase;

		&::before {
			content: '»';
		}
		&::after {
			content: '«';
		}
	}
}

.absolute {
	position: absolute;
	height: 2.5cm;
	width: auto;
}

#wall {
	bottom: 0.75cm;
	right: 1cm;
}

#typo {
	top: 0.75cm;
	left: 1cm;

	width: 5cm;
	height: auto;
}
</style>
