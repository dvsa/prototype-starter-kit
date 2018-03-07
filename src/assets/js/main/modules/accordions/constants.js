export const ACCORDION_CONSTANTS = {
  closeAllText: 'Close All',
  openAllText: 'Open All',
  attributeNames: {
    sectionContentId: 'data-section-content-id',
    stateIndexId: 'data-section-state-index-id',
    sectionCategory: 'data-section-category',
    preventDefault: 'data-section-prevent-default',
    disableStateRestore: 'data-section-disable-restore-state',
  },
  classNames: {
    accordion: 'js-accordion',
    section: 'js-accordion__section',
    sectionOpen: 'js-accordion__section--open',
    header: 'js-accordion__header',
    headerHover: 'js-accordion__header--hover',
    title: 'js-accordion__title-button',
    content: 'js-accordion__content',
    expandButton: 'js-accordion__expand-button',
    jsEnabled: 'js-accordion--js-enabled',
  },
  ariaAttributes: {
    controls: 'aria-controls',
    expanded: 'aria-expanded',
    hidden: 'aria-hidden',
  },
  dataLayer: {
    open: 'open',
    close: 'close',
    closedStatus: 'closed',
    linkClickEvent: 'link-click',
    linkType: 'accordion',
    sectionMemoryEvent: 'subsection-memory',
    sectionAll: 'subsection-all',
  },
  eventNames: {
    expandAllOpen: 'js-accordion:expand-all-open',
  },
};
