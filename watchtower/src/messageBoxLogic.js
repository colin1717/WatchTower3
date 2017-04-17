export function messageBoxMessageLogic(selected, data) {

  //BVQA Container condition
  if (selected === "BVQA Container") {

    if (data["BVQA Container Has Content"]) {
      return "BVQA Container is detected and has content"
    } else if (!data["BVQA Container Has Content"] && data["BVQA Container Loading"]) {
      return "BVQA Container is detected but no content was found"
    } else {
      return "BVQA Container was not detected on this page"
    }
  }

  //BVRR Summary condition
  else if (selected === "BVRRSummary") {

    if (data["BVRRSummary Container Has Content"]) {
      return "BVRR Summary is detected and has content"
    } else if (!data["BVRRSummary Container Has Content"] && data["BVRRSummary Container Loading"]) {
      return "BVRR Summary is detected but no content was found"
    } else {
      return "BVRR Summary was not detected on this page"
    }
  }

  //BVRR Container condidtion
  else if (selected === "BVRR Container") {

    if (data["BVRR Container Has Content"]) {
      return "BVRR Container is detected and has content"
    } else if (!data["BVRR Container Has Content"] && data["BVRR Conainer Loading"]) {
      return "BVRR Container is detected but no content was found"
    } else {
      return "BVRR Container was not detected on this page. "
    }
  }

  //BVSEO Container condition
  else if (selected === "BVSEO") {

    if (data["SEO Content Loading"] && data["SEO Pagination Working"]) {
      return "SEO content is loading and pagination is working"
    } else if (data["SEO Content Loading"] && !data["SEO Pagination Working"]) {
      return "SEO content is loading but pagination failing"
    } else if (!data["SEO Content Loading"] && data["SEO Pagination Working"]) {
      return "SEO Pagination detected but no Rating and Review content in SEO"
    } else {
      return "BVSEO is not detected on this page."
    }
  }

  //BVAPI Condition
  else if (selected === "BVAPI") {

    if (data['Javascript URL'].status) {
      return data['Javascript URL'].msg
    } else {
      return "BVAPI not detected on this page."
    }
  }

  //Productin Container page condition
  else if (selected === "Production Container Page") {
    return data['Production Container URL'].msg
  }

  //Staging container page condition
  else if (selected === "Staging Container Page") {
    return data["Staging Container URL"].msg
  }
}

export function messageBoxMessageWarningTextLogic(selected, data) {

  //BVQA Container condition
  if (selected === "BVQA Container") {

    if (data["BVQA Container Has Content"]) {
      return null
    } else if (!data["BVQA Container Has Content"] && data["BVQA Container Loading"]) {
      return "Warning: "
    } else {
      return "Warning: "
    }
  }

  //BVRR Summary condition
  else if (selected === "BVRRSummary") {

    if (data["BVRRSummary Container Has Content"]) {
      return null
    } else if (!data["BVRRSummary Container Has Content"] && data["BVRRSummary Container Loading"]) {
      return "Warning: "
    } else {
      return "Warning: "
    }
  }

  //BVRR Container condidtion
  else if (selected === "BVRR Container") {

    if (data["BVRR Container Has Content"]) {
      return null
    } else if (!data["BVRR Container Has Content"] && data["BVRR Conainer Loading"]) {
      return "Warning: "
    } else {
      return "Warning: "
    }
  }

  //BVSEO Container condition
  else if (selected === "BVSEO") {

    if (data["SEO Content Loading"] && data["SEO Pagination Working"]) {
      return null
    } else if (data["SEO Content Loading"] && !data["SEO Pagination Working"]) {
      return "Warning: "
    } else if (!data["SEO Content Loading"] && data["SEO Pagination Working"]) {
      return "Warning: "
    } else {
      return "Warning: "
    }
  }

  //BVAPI Condition
  else if (selected === "BVAPI") {

    if (data['Javascript URL'].status) {
      null
    } else {
      return "Warning: "
    }
  }
}
