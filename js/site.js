/* site.js
this used to be document ready
*/
$(function () {
    "use strict";
    $.getJSON("data/en/contact-info.json").done(renderContactInfo);
    $.getJSON("data/en/skills.json").done(renderSkills);
    $.getJSON("data/en/work-experience.json").done(renderWorkExperience);
});

let iconCssClasses = " fa fa-fw w3-margin-right w3-text-blue"

function renderWorkExperience(workExperience) {
    let html = "<h2 class=\"w3-text-grey w3-padding-16\"><i " +
        "class=\"fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-blue\"></i>Work Experience</h2>"
    $.each(workExperience, function (index, workExperienceItem) {
        html += "<div class=\"w3-container\">" +
            "<h6>" +
            "<span class=\"w3-text-blue\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>" +
            workExperienceItem.from +
            " - " +
            workExperienceItem.to +
            " </span>" +
            "<b class=\"w3-opacity\">" +
            workExperienceItem.title +
            " / " +
            "<a target=\"_blank\" class=\"w3-text-indigo\" href=\"" +
            workExperienceItem.companyURL +
            "\">" +
            workExperienceItem.companyName +
            "</a>" +
            "</b>" +
            "</h6>" +
            "<div id=\"details\">" +
            "</div></div>";
    });
    replaceContainerContent("#work-experience", html);
}

function renderSkills(skills) {
    let html = ""
    $.each(skills, function (index, skill) {
        html += "<p>" +
            skill.name +
            "</p>" +
            "<div class=\"w3-light-grey w3-round-xlarge w3-small\">" +
            "<div class=\"w3-container w3-center w3-round-xlarge w3-blue\" style=\"width:" +
            skill.percentage +
            "%\">" +
            skill.percentage +
            " %</div>\n" +
            "</div>";
    });
    replaceContainerContent("#skills", html);
}

function renderContactInfo(contactInfo) {
    let emailLink = "<a target=\"_blank\" href=\"mailto:" +
        contactInfo.email + "\">" +
        contactInfo.email + "</a>"
    let contactInfoHtml = renderContactInfoLine("fa-briefcase", contactInfo.job);
    contactInfoHtml += renderContactInfoLine("fa-home", contactInfo.locationDoB);
    contactInfoHtml += renderContactInfoLine("fa-envelope", emailLink);
    contactInfoHtml += renderContactInfoLine("fa-globe", contactInfo.languages);

    replaceContainerContent('#contact-info',contactInfoHtml);
}

function renderContactInfoLine(icon, contactInfo) {
    let contactInfoHtml = "<p>" +
        "<i class=\"" +
        icon +
        iconCssClasses +
        "\"></i>" +
        contactInfo +
        "</p>"
    return contactInfoHtml;
}

function replaceContainerContent(selector, contactInfoHtml) {
    let contactInfoContainer = $(selector);
    contactInfoContainer.empty();
    contactInfoContainer.append(contactInfoHtml);
}
