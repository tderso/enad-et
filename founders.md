---
layout: page
title: ENAD Founders
lang: en
ref: founders
description: Founding members of the ENAD
pageHero: /assets/images/deaf-at-St-George-1963-E-C-2.png
---

<aside class="post-aside">
</aside>
<div class="post-content">
    <div class="bordered tiny">
      <img src="{{ site.baseurl }}/assets/images/deaf-at-St-George-1963EC.jpg"
      alt="Some of the deaf and hearing founding members of the ENAD at the St. George Church in 1963 E.C."
      class="img-responsive center-blaock" >
      <div class="caption text-center">
        <P>
          Some of the deaf and hearing founding members of the ENAD at the St. George Church in 1970 (1963 E.C.). They are (left to right):<br/>
          Front row: ?, Getachew Gebrehiwit, Hizkias Tesemma, Minasse Abera, Tesfaye Asnake (hearing), Afework Mengesha<br/>
          Second row: Abebe Tibebe Begna, Solomon Tadesse, Tilahun Ferede, Yohannes Gebremariam, Daniel (Shafie) Adam, Teklehaimanot Derso, Fekadu Haile, ?, Dotcho/Doko Kabtih-Yimer, Getahun Kebede<br/>
          Third row: Yohannes Tsegaye, Bizuayehu Tadesse, Alemseged Araya, Settegn Belachew, Abebe Lemma, ?, Simegn Woldeberhan, Genet Getachew, Saba Geremew, Genet Mulushewa, Alima Mohammed<br/>
          Standing: Getachew Abebe, Abebe Alemayehu, Afework Haileselassie, Yilma Hailu, Hailu Yesuneh, Beyene Kebede, Worku Alemayehu
        </P>
      </div>
    </div>
	<div class="bordered tiny">
		<img src="{{ site.baseurl }}/assets/images/deaf-at-St-George-1963EC-2-medium.png"
		alt="Some of the deaf and a hearing friend who established the ENAD at St. George Church in 1963 E.C."
		class="img-responsive center-block" />
		<div class="caption text-center">
			<p>
				Some of the deaf and a hearing friend who established the ENAD
				at St. George Church in 1963 E.C.They are (left to right):<br/>
				Front row (seated): Hailu Yesuneh, Genet Getachew, Saba Geremew, Tesfaye Bantiwalu, Teklehaimanot Derso, Setegn Belachew, Tesfaye Asnake (hearing), Minasse Abera and Getachew Negussie<br/>
				Back row (seated): Semegn Woldeberhan, Fekadu Haile, Getachew Gebrehiwot, Alemseged Araya, Alima Mohammed, ?, Abebe Lemma<br/>
				Standing: Genet Mulushewa, Wolde Berhanu, Shafie (Daniel) Adam, Yohannes Gebremariam, Abebe Alemayehu, Worku Alemayehu, Afework Mengesha, Abebe Tibebe Begna, Yilma Hailu, Bizuayehu Tadesse, ?, Solomon Tadesse, Yohannes Tsegaye, Tilahun Ferede<br/> 
				(Photo credit: ENAD)
			</p>
		</div>
	</div>
	<p>
		The following is a list of the founding members of the ENAD and other members who joined during the first two years of the existence of the association. This is as shown in the register of the association that was recorded at the time with the vital information about death added now.
	</p>
    <p>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">List of Members Registered During the First Two Years</h3>
        </div>
        <table class="table table-bordered" style="font-size: 0.8em;">
          <tr>
            <th>Reg. No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
          {% for member in site.data.enad_members %}
            <tr>
              <td>{{ member.regnum }}</td>
              <td>
                {{ member.name }} {{ member.fname }} {{ member.gfname }}
                {% assign len = member.vital | size %}
                {% if len > 0 %}
                 ({{ member.vital }})
                {% endif %}
              </td>
              <td>{{ member.age }}</td>
              <td>{{ member.work }}</td>
            </tr>
          {% endfor %}
        </table>
      </div>  
    </p>
</div>
