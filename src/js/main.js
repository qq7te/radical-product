var modalHTML = `<div role="dialog" id="modal-popover" class="modal modal--is-hidden">
					<div class="modal__container">
						<section class="content content--cta">
							<button data-action-hook="close-modal" class="modal__close-modal" id="close-modal">Close</button>
							<div class="container container--content">
								<h2 class="section-header">Download the whole toolkit!</h2>
								<p>Subscribe to Radical Product to get immediate, free access to the full Radical Product Toolkit. You’ll receive ongoing Toolkit updates, invitations to upcoming events, and subscriber-only discounts on future books and workshops.</p>
								<form action="https://kayt.us10.list-manage.com/subscribe/post?u=5559a62245d86aeeefd822705&amp;id=8002eca168" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
									<label for="email">My Email</label>
									<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="email@example.com">
									<div style="position: absolute; left: -5000px;" aria-hidden="true">
					                  <input type="text" name="b_5559a62245d86aeeefd822705_8002eca168" tabindex="-1" value="">
					                </div>
									<button type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" class="button">Send me the toolkit</button>
								</form>
							</div>
						</section>
					</div>
				 </div>`


function setUpDownloadModal() {
	// Create and inject modal
	var modalNode = document.createElement('div')
	modalNode.innerHTML = modalHTML;
	document.body.appendChild(modalNode);

	// Set up listener to close modal
	document.querySelectorAll('[data-action-hook=close-modal]').forEach(function (el) {
		el.addEventListener('click', function (e) {
			e.preventDefault();
			document.getElementById('modal-popover').classList.add('modal--is-hidden');
		});
	});

	// Set up listener to trigger modal
	document.querySelectorAll('[data-action-hook=download-toolkit]').forEach(function (el) {
		el.addEventListener('click', function (e) {
			e.preventDefault();
			document.getElementById('modal-popover').classList.remove('modal--is-hidden');
			document.getElementById('modal-popover').scrollIntoView(true);
		});
	});
}

setUpDownloadModal();

function bookTalk() {
	var selectedTalk = document.getElementById("selectedTalk").value;
	var email = document.getElementById("userEmail").value;
	var recipient = "radhika@radicalproduct.com"
	var formattedBody = "Hello I'm Interested in " + selectedTalk + " \n Let's get in touch " + email;
	var mailToLink = "mailto:" + recipient + "?subject=Book a Talk&body=" + encodeURIComponent(formattedBody);
	window.location.href = mailToLink;
}


$(function(){

	const $botonVentanaModal=$('#botonVentanaModal');
	const $ventanaModal = $('#ventanaModal');
	const $iframeVideo = $('#iframeVideo');
	let videoSrc= "https://www.youtube.com/embed/oU84fFHVFvY";

	$botonVentanaModal.on('click',function(){
		$iframeVideo.attr('src',videoSrc+"?autoplay=1");
		$ventanaModal.modal('show');
	});


	$ventanaModal.on('hidden.bs.modal', function (event) {
	  
	  $iframeVideo.attr('src',null);

	});
	 
  });  