import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class SearchBannerButtons extends Component {
  @tracked SearchBannerButtons = JSON.parse(settings.search_banner_buttons);
}
