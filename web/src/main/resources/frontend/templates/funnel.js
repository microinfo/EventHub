var funnelTemplate = ' \
<div class="frame funnel-show"> \
  <div class="header"> \
    <h2>Steps</h2><br> \
    <div class="funnel-steps"> \
      <div class="steps-container"></div> \
    </div> \
    <div class="funnel-filters-toggle filter-toggle">Filters<span class="down-arrow"></span></div> \
  </div> \
  <div class="top"> \
    <div class="cf"> \
      <h2>Parameters</h2><br> \
      <div class="funnel-inputs"> \
        <div class="date-container"> \
          <input type="text" id="funnelStartDate" placeholder="Start Date"> - <input type="text" id="funnelEndDate" placeholder="End Date"> \
        </div> \
        <span> \
          Days to complete: <input class="two-digits" id="daysToComplete" type="text" name="days" value="7"> \
        </span> \
        <input class="btn btn-success calculate-btn calculate-funnel" type="submit" value="Calculate Funnel"> \
        <img class="spinner" src="spinner.gif"> \
      </div> \
      <div class="completion-rate"></div> \
    </div> \
  </div> \
  <div class="middle"> \
    <div class="graph-container"> \
      <div class="y-axis"> \
        <div class="y-value"></div> \
        <div class="y-value"></div> \
        <div class="y-value"></div> \
        <div class="y-value"></div> \
        <div class="y-value"></div> \
      </div> \
      <div class="graph"> \
    </div> \
    </div> \
  </div> \
</div> \
';