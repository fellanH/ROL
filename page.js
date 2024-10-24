window.addEventListener("DOMContentLoaded", function () {
  jQuery(function () {
    jQuery("#region-x").load("/workplace/product/x }} .excluded_regions");
    regionLoadComplete();
  });
});

function regionLoadComplete() {
  const loadCompleteEvent = new CustomEvent("regionLoadComplete");
  window.dispatchEvent(loadCompleteEvent);
}

window.addEventListener("DOMContentLoaded", function () {
  jQuery(function () {
    jQuery("#region-work-1").load(
      "/workplace/product/work-1 .excluded_regions"
    );
  });
});

//fetch variables from CMS collection pages
function fetchVariables(slugTrim, slug, divClass) {
  const regionDiv = jQuery(`#region-${slugTrim}`);
  console.log("regionDiv:", regionDiv);

  if (regionDiv.length > 0) {
    // Check if the div exists
    regionDiv.load(`${slug} .${divClass}`, function (response, status, xhr) {
      if (
        status === "success" &&
        jQuery(this).find(`.excluded-region-var`).length > 0
      ) {
        console.log(`${slug} region-variables: imported`);
      } else {
        console.log(`${slug} region-variables: not set`);
      }
    });
  } else {
    console.log(`Div #region-${slugTrim} does not exist.`);
  }
}
