  // Define the Boxever queue 
  var _boxeverq = _boxeverq || [];

  // Define the Boxever settings 
  var _boxever_settings = {
      client_key: "sndbxfifwzvnqlhyawzdyhiqfxfrpywf",
      target: "https://api-ap-southeast-2-production.boxever.com/v1.2",
      cookie_domain: ".glitch.com",
      pointOfSale: "StandardDemo",
      web_flow_target: "https://d35vb5cccm4xzp.cloudfront.net",
      web_flow_config: { async: false, defer: false },
      javascriptLibraryVersion: "1.4.9"
  };

  // Load the Boxever JavaScript Library asynchronously 
  (function() {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;  
      s.src = "https://d1mj578wat5n4o.cloudfront.net/boxever-" + window._boxever_settings.javascriptLibraryVersion + ".min.js";
      var x = document.getElementsByTagName("script")[0]; x.parentNode.insertBefore(s, x);
  })();

_boxeverq.push(() => {
    // Create a "VIEW" event object
    const viewEvent = {
        browser_id: Boxever.getID(),
        channel: "WEB",
        type: "VIEW",
        language: "JP",
        currency: "USD",
        page: window.location.pathname + window.location.search,
        pos: _boxever_settings.pointOfSale,
    };

    // Send the event data to the server
    Boxever.eventCreate(
        viewEvent,
        () => {},
        "json"
    );

    // Log the browser ID to the console
    console.log("Copy-paste the following line into Sitecore CDP, Customer Data, Guests, Search field:");
    console.log(`bid: ${Boxever.getID()}`);
});
