<script>
var skills = $("#more-skills");
var addSkillsForm = $("#add-skills");
var indexSkills = 0;

var getSkillsForm = function(indexSkills, action) {
    return $('\
    <div class="col-lg-3 input-group" id="skills-m">\
    <input name="skills" type="text" placeholder="Add Skills" class="form-control"/>\
    	<span class="input-group-btn">\
    	<button class="remove btn btn-danger" type="button">Remove</button>\
    	</span>\
		</div>\
    ');
}

addSkillsForm.on("click", function() {
    var form = getSkillsForm(++indexSkills);
    form.find(".remove").on("click", function() {
       document.getElementById("skillsUtilCount").value = --indexSkills;
       $(this).closest('#skills-m').remove();
    });
    document.getElementById("skillsUtilCount").value = indexExperience;
    skills.append(form);
});


/* Tabs Functionality*/
$(document).ready(function () {
  var navListItems = $('div.setup-panel div a'),
          allWells = $('.setup-content'),
          allNextBtn = $('.nextBtn');

  allWells.hide();

  navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')),
              $item = $(this);

      if (!$item.hasClass('disabled')) {
          navListItems.removeClass('btn-primary').addClass('btn-default');
          $item.addClass('btn-primary');
          allWells.hide();
          $target.show();
          $target.find('input:eq(0)').focus();
      }
  });

  allNextBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;

      $(".form-group").removeClass("has-error");
      for(var i=0; i<curInputs.length; i++){
          if (!curInputs[i].validity.valid){
              isValid = false;
              $(curInputs[i]).closest(".form-group").addClass("has-error");
          }
      }

      if (isValid)
          nextStepWizard.removeAttr('disabled').trigger('click');
  });

  $('div.setup-panel div a.btn-primary').trigger('click');
});
</script>