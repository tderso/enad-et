---
layout: page
title: About Us
lang: en
ref: about
pageHero: /assets/images/ENAD-logo.png
---

<aside class="post-aside">
  {% include google-map.html %}
  <ul class="side-menu-list">
   <!-- {% comment %}{% include nav-sub-links.html %} {% endcomment %} -->
  </ul>
</aside>
<div class="post-content">
  <ul class="side-menu-list">
   {% include nav-sub-links.html %}
  </ul>
    <div class="row pl-5 pr-5">
      <h2 class="pb-3">Contact Details</h2>
      <div class="border shadow">
        <p>
          The Ethiopian National Association of the Deaf (ENAD)<br />
          P. O. Box 21359<br />
          Addis Ababa<br />
          Ethiopia
        </p>
        <p>
          Tel.: +251 11-122-2517 (Fixed line)<br />
          <span class="pl-5">+251-118-122610 (can receive text messages)</span><br />
          <span class="pl-5">+251-942-381712 (cell phone)</span>
        </p>
        <p>E-Mail: 
          <a href="mailto:enadet1972@gmail.com">enadet1972@gmail.com</a>
        </p>
      </div>
    </div>
    <div class="pt-5">
      <p>
        The Ethiopian National Association of the deaf (ENAD) is a not for profit, non-governmental association established by the deaf with the assistance of some of their hearing friends. It was established in 1970 and officially registered by the security department of the government in 1971. It was re-registered in 2010 in accordance with the provisions of the new <strong>Charities and Societies Proclamation</strong>  as a charitable society by the Charities and Societies Agency of the Federal Democratic Republic of Ethiopia and  again in 2020 in accordance with the <strong>Organization of Civil Societies Proclamation No. 1113/2019</strong>.
      </p>
      <p>
        The ENAD is fully run and managed by elected members of the association.
      </p>
      <p>
      {% for branch in site.branchoffices %}
        The ENAD has {{ branch.number_of_branches }} branches now. It is trying to expand its service to the deaf all over the country. The Internet connectivity of the country is improving a lot. Thus, in order to make it possible to serve the deaf even at the remotest places, the ENAD has developed this website to keep in touch with its members and the rest of the world.
      {% endfor %}
      </p>
    </div>
    <h2>The ENAD is a member of the WFD</h2>
    <div>
      <img src="{{ "/assets/images/wfd-logo.jpg" | prepend: site.baseurl }}"   alt="WFD Logo" 
      class="img-fluid pull-right border shadow ml-3" />
      <p>
        The ENAD is an ordinary member of the <a href="http://www.wfdeaf.org">World Federation of the Deaf (WFD)</a>. It has been a member since 1972. It participated in the WFD general assembly for the first time in 1975 in the USA. The latest participation of the ENAD at the WFD general assembly was in 2015 in Istanbul, Turkey. Between these two, the ENAD has participated at five world congresses of the WFD, brining its total participation to seven. 
      </p>
      <p>
        The ENAD is also one of the founding members of the Federation of Ethiopian National Associations of Persons with Disabilities (FENAPD), an umbrella organization of associations of persons with disabilities.
      </p>
    </div>
    <h2>Activities</h2>
    <div>
      <p>
        <!-- 
        The ENAD used to be involved mostly in advocacy work for the deaf.
        Because of the new <a href="www.molsa.gov.et/Amharic/resources/Documents/Charities%20and%20Societies%20Proclamation.pdf">Charities and Societies Proclamation</a> and as most of its funding is sourced from foreign countries, it is now re-registered as a resident society and is engaged in development activities that benefit the deaf citizens of the country
        in collaboration with governmental and other non-governmental
        organizations.
        -->
      </p>
      <p>
        The activities of the ENAD have been directed at deaf children, deaf youth and deaf women. The main themes have been about the education of deaf children, employment of deaf youth, sign language development, recreation activities of the deaf (sports), provision of medical services to the deaf, sign language interpretation services, deaf culture, awareness creation about HIV/AIDs. It carries out its activities in cooperation and the support of the government and non-governmental organizations.
      </p>
      <p>
        The deaf persons who established the ENAD were mostly youngsters. Now, after 45 years of existence of the ENAD, those members have now become seniors (older persons). As of December 2015, they have established a Deaf Seniors Club and the ENAD now has a deaf seniors section. As more and more members age, new types of problems connected to deaf older persons the ENAD has not encountered so far will be prevalent. So, it is time the ENAD also starts thinking about the needs of deaf seniors.
      </p>
    </div>
</div>
