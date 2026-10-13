const coreCommands = [
  ["Bot & Moderation", "-help", "Lists commands by category.", true],
  ["Bot & Moderation", "-ping", "Shows the bot's latency and status.", true],
  ["Bot & Moderation", "-stats", "Shows bot server and member statistics.", true],
  ["Bot & Moderation", "-health", "Shows detailed health and runtime information.", true],
  ["Bot & Moderation", "-serverinfo", "Shows statistics for the current Discord server.", true],
  ["Bot & Moderation", "-install", "Provides links to add the application to an account or server.", false],
  ["Bot & Moderation", "-api-status", "Checks the availability of Roblox APIs.", true],
  ["Bot & Moderation", "-report <username>", "Submits a Roblox account to the report queue; Roblox verification is required.", true],
  ["Bot & Moderation", "-staff", "Shows the staff list. Channel or permission restrictions may apply.", true],
  ["Bot & Moderation", "-setrole <username> <action>", "Adds or removes a staff badge or role for a verified user. Actions: owner, admin, normal, premium, plus, verified, dev, remove.", true],
  ["Bot & Moderation", "-myverification", "Shows your Roblox verification information.", false],
  ["Users & Accounts", "-scan <target>", "Scans a Roblox username, ID, or Discord member and shows profile information.", true],
  ["Users & Accounts", "-user <username>", "Analyzes a Roblox user profile.", true],
  ["Users & Accounts", "-id <userid>", "Shows account information from a Roblox user ID.", false],
  ["Users & Accounts", "-username <username>", "Checks whether a username is available or already taken.", false],
  ["Users & Accounts", "-verified <username>", "Shows a Roblox account's verification status.", false],
  ["Users & Accounts", "-accountage <username>", "Calculates the age of an account.", true],
  ["Users & Accounts", "-usercreated <username>", "Shows when an account was created.", false],
  ["Users & Accounts", "-lastonline <username>", "Checks when a user was last online.", false],
  ["Users & Accounts", "-userbio <username>", "Shows a user's public profile description.", false],
  ["Users & Accounts", "-userstatus <username>", "Shows account and online status.", false],
  ["Users & Accounts", "-accountlanguage <username>", "Shows the language set on a profile.", false],
  ["Users & Accounts", "-robloxbadges <username>", "Shows platform badges on a user's account.", false],
  ["Users & Accounts", "-badges <username>", "Shows a user's account badges.", false],
  ["Social", "-friends <username>", "Lists a user's friends.", true],
  ["Social", "-followers <username>", "Lists a user's followers.", false],
  ["Social", "-following <username>", "Lists the accounts a user follows.", false],
  ["Social", "-onlinefriends <username>", "Shows a user's online friends.", false],
  ["Social", "-friendstatus <first> <second>", "Checks whether two users are friends.", false],
  ["Social", "-mutualfriends <first> <second>", "Shows friends shared by two users.", false],
  ["Social", "-mutuals <username>", "Finds mutual verified Roblox accounts.", false],
  ["Social", "-counts <username>", "Shows social and group counts.", false],
  ["Social", "-friendscount <username>", "Shows a user's friend count.", false],
  ["Social", "-followerscount <username>", "Shows a user's follower count.", false],
  ["Social", "-followingcount <username>", "Shows how many accounts a user follows.", false],
  ["Social", "-compare <first> <second>", "Compares two Roblox profiles.", false],
  ["Social", "-usergroups <username>", "Lists the groups a user belongs to.", false],
  ["Games & Servers", "-games <username>", "Lists games created by a user.", false],
  ["Games & Servers", "-game <place_id>", "Shows game information from a place ID.", true],
  ["Games & Servers", "-gamesearch <keyword>", "Searches for Roblox games.", false],
  ["Games & Servers", "-gameicon <place_id>", "Shows a game's icon.", false],
  ["Games & Servers", "-gamevotes <place_id>", "Shows a game's like and dislike statistics.", false],
  ["Games & Servers", "-gamebadges <place_id>", "Lists badges for a game.", false],
  ["Games & Servers", "-gameplaces <universe_id>", "Shows places within a universe.", false],
  ["Games & Servers", "-gameanalytics <username>", "Analyzes games created by a user.", false],
  ["Games & Servers", "-gamecreator <place_id>", "Finds the creator of a game.", false],
  ["Games & Servers", "-gamegenre <place_id>", "Shows a game's genre.", false],
  ["Games & Servers", "-gameupdated <place_id>", "Shows when a game was last updated.", false],
  ["Games & Servers", "-servers <place_id>", "Lists public servers for a place.", false],
  ["Groups", "-groups <username>", "Shows the groups a user belongs to.", true],
  ["Groups", "-groupinfo <group_id>", "Shows information about a group.", true],
  ["Groups", "-groupmembers <group_id>", "Lists group members.", false],
  ["Groups", "-grouproles <group_id>", "Lists a group's roles.", false],
  ["Groups", "-groupsearch <keyword>", "Searches for Roblox groups.", false],
  ["Groups", "-groupcheck <username> <group_id>", "Checks a user's role in a group.", false],
  ["Groups", "-groupaudit <group_id>", "Shows a group's owner, roles, and member count.", false],
  ["Groups", "-groupmembercount <group_id>", "Shows the number of group members.", false],
  ["Groups", "-groupanalytics <group_id>", "Analyzes a group.", false],
  ["Groups", "-groupicon <group_id>", "Shows a group's icon.", false],
  ["Groups", "-groupgames <group_id>", "Shows a group's public games.", false],
  ["Avatar & Inventory", "-avatar <username>", "Shows a user's avatar image.", false],
  ["Avatar & Inventory", "-thumbnail <username>", "Shows avatar thumbnails.", false],
  ["Avatar & Inventory", "-avatar3d <username>", "Shows a user's 3D avatar.", false],
  ["Avatar & Inventory", "-avataritems <username>", "Lists items currently worn by a user.", false],
  ["Avatar & Inventory", "-avataroutfits <username>", "Shows a user's public outfits.", false],
  ["Avatar & Inventory", "-outfits <username>", "Shows outfits created by a user.", false],
  ["Avatar & Inventory", "-outfit <outfit_id>", "Shows items in an outfit.", false],
  ["Avatar & Inventory", "-avatarbundles <username>", "Lists bundles owned by a user.", false],
  ["Avatar & Inventory", "-limiteds <username>", "Scans collectible inventory RAP and value information.", false],
  ["Avatar & Inventory", "-inventory <username>", "Shows recent collectible items.", true],
  ["Avatar & Inventory", "-owned <username> <assetid>", "Checks whether a user owns an asset or item.", false],
  ["Avatar & Inventory", "-obtained <username> <badgeid>", "Checks when a Roblox badge was earned.", false],
  ["Avatar & Inventory", "-rolimons <username>", "Shows RAP and value information from Rolimons data.", false],
  ["Avatar & Inventory", "-favorites <username>", "Lists a user's favorite games.", false],
  ["Avatar & Inventory", "-gamepasses <username>", "Shows game passes created by a user.", false],
  ["Assets & Badges", "-gamepassinfo <gamepass_id>", "Shows game pass information.", false],
  ["Assets & Badges", "-asset <asset_id>", "Shows asset details.", false],
  ["Assets & Badges", "-catalog <keyword>", "Searches catalog items.", false],
  ["Assets & Badges", "-bundleinfo <bundle_id>", "Shows bundle information.", false],
  ["Assets & Badges", "-assetcreator <asset_id>", "Finds the creator of an asset.", false],
  ["Assets & Badges", "-pricecheck <asset_id>", "Shows an asset's price information.", false],
  ["Assets & Badges", "-assetcompare <first> <second>", "Compares two assets.", false],
  ["Assets & Badges", "-badgeinfo <badge_id>", "Shows Roblox badge details.", false],
  ["Assets & Badges", "-badgeholders <badge_id>", "Lists users who recently earned a badge.", false],
  ["Assets & Badges", "-badgecheck <username> <badge_id>", "Checks whether a user has a badge.", false],
  ["Assets & Badges", "-badgeprogress <username>", "Shows a user's badge count.", false],
  ["Assets & Badges", "-placeinfo <place_id>", "Shows place and universe IDs.", false],
  ["Assets & Badges", "-universeinfo <universe_id>", "Shows universe information.", false],
  ["Search & Links", "-search <keyword>", "Searches for Roblox users.", true],
  ["Search & Links", "-findscript <query>", "Searches ScriptBlox by name, keyword, or game ID.", true],
  ["Search & Links", "-profilelink <username>", "Creates a Roblox profile link.", false],
  ["Search & Links", "-inventorylink <username>", "Creates a Roblox inventory link.", false],
  ["Search & Links", "-gamelink <place_id>", "Creates a Roblox game link.", false],
  ["Search & Links", "-robloxlinks <username>", "Shows Roblox links related to a user.", false],
  ["Search & Links", "-watchlist [username]", "Shows the watchlist, or adds a user when a username is provided.", true],
  ["Search & Links", "-watchliststatus", "Checks the status of watched accounts.", false],
  ["WEAO & ScriptBlox", "-weao versions [category]", "Shows Roblox versions. Categories: all, current, future, past.", true],
  ["WEAO & ScriptBlox", "-weao exploits", "Lists executor statuses tracked by WEAO.", true],
  ["WEAO & ScriptBlox", "-weao exploitstatus <exploit>", "Shows the status of an executor.", true],
  ["WEAO & ScriptBlox", "-weao exploitchangelog <exploit>", "Shows an executor's changelog.", true],
  ["WEAO & ScriptBlox", "-scriptstatus", "Shows ScriptBlox API status.", false],
];

const additionalCommands = [
  ["-robloxstatus", "Roblox API status", "Bot & Moderation"],
  ["-usercompare <first> <second>", "Compares two profiles", "Social"],
  ["-namehistory <username>", "Shows username history", "Users & Accounts"],
  ["-joindate <username>", "Shows account creation information", "Users & Accounts"],
  ["-outfitpreview <outfit_id>", "Previews an outfit", "Avatar & Inventory"],
  ["-assetsearch <keyword>", "Searches Roblox assets", "Assets & Badges"],
  ["-gamepassesof <username>", "Shows a user's game passes", "Avatar & Inventory"],
  ["-serverfinder <place_id>", "Finds game servers", "Games & Servers"],
  ["-usersearch <keyword>", "Searches for users", "Search & Links"],
  ["-useravatar <username>", "Shows a user's avatar image", "Avatar & Inventory"],
  ["-usernamecheck <username>", "Checks a username", "Users & Accounts"],
  ["-catalogdetails <asset_id>", "Shows catalog or asset details", "Assets & Badges"],
  ["-friendlist <username>", "Lists a user's friends", "Social"],
  ["-followerlist <username>", "Lists a user's followers", "Social"],
  ["-userconnections <username>", "Shows friend and follower connections", "Social"],
  ["-groupowner <group_id>", "Shows group owner information", "Groups"],
  ["-placeicon <place_id>", "Shows a game's icon", "Games & Servers"],
  ["-badgeusers <badge_id>", "Shows users who earned a badge", "Assets & Badges"],
  ["-headshot <username>", "Shows a user's headshot image", "Avatar & Inventory"],
  ["-userfavorites <username>", "Shows favorite games", "Games & Servers"],
  ["-userfollowing <username>", "Lists followed accounts", "Social"],
  ["-userfollowers <username>", "Lists followers", "Social"],
  ["-robloxhealth", "Shows Roblox service and API status", "Bot & Moderation"],
  ["-profilelinks <username>", "Shows Roblox profile links", "Search & Links"],
  ["-socialstats <username>", "Shows social counts", "Social"],
  ["-inventoryscan <username>", "Scans a user's inventory", "Avatar & Inventory"],
  ["-gameinfo <place_id>", "Shows game information", "Games & Servers"],
  ["-group <group_id>", "Shows group information", "Groups"],
  ["-badge <badge_id>", "Shows badge information", "Assets & Badges"],
  ["-avatarinfo <username>", "Shows worn avatar items", "Avatar & Inventory"],
  ["-places <universe_id>", "Shows places in a universe", "Games & Servers"],
  ["-serverscan <place_id>", "Shows public servers", "Games & Servers"],
  ["-assetinfo <asset_id>", "Shows asset information", "Assets & Badges"],
  ["-outfitinfo <outfit_id>", "Shows outfit information", "Avatar & Inventory"],
  ["-userhistory <username>", "Shows username history", "Users & Accounts"],
  ["-userpresence <username>", "Shows online presence", "Users & Accounts"],
  ["-groupstats <group_id>", "Analyzes a group", "Groups"],
  ["-gameanalytics2 <username>", "Analyzes a user's games", "Games & Servers"],
  ["-scriptsearch <query>", "Searches ScriptBlox", "WEAO & ScriptBlox"],
  ["-scriptblox <query>", "Searches ScriptBlox", "WEAO & ScriptBlox"],
  ["-watchstatus", "Checks watchlist status", "Search & Links"],
  ["-linkprofile <username>", "Creates a profile link", "Search & Links"],
  ["-linkinventory <username>", "Creates an inventory link", "Search & Links"],
  ["-userprofile <username>", "Analyzes a user profile", "Users & Accounts"],
  ["-userage <username>", "Shows account age", "Users & Accounts"],
  ["-gameoverview <username>", "Analyzes a user's games", "Games & Servers"],
  ["-groupoverview <group_id>", "Analyzes a group", "Groups"],
  ["-assetdetails <asset_id>", "Shows asset details", "Assets & Badges"],
  ["-badgeoverview <badge_id>", "Shows badge details", "Assets & Badges"],
  ["-avatarpreview <username>", "Shows a 3D avatar preview", "Avatar & Inventory"],
  ["-outfitdetails <outfit_id>", "Shows outfit details", "Avatar & Inventory"],
  ["-universeplaces <universe_id>", "Shows places in a universe", "Games & Servers"],
  ["-publicservers <place_id>", "Shows public servers", "Games & Servers"],
  ["-playergroups <username>", "Shows a user's groups", "Groups"],
  ["-playerfriends <username>", "Shows a user's friends", "Social"],
  ["-playerfollowers <username>", "Shows a user's followers", "Social"],
  ["-playergames <username>", "Shows a user's games", "Games & Servers"],
];

const shortCuts = [
  ["-u", "-user"],
  ["-h", "-help"],
  ["-p", "-ping"],
  ["-s", "-scan"],
  ["-st", "-stats"],
  ["-f", "-friends"],
  ["-g", "-groups"],
  ["-ga", "-game"],
];

const commands = coreCommands.map(([category, syntax, description, slash]) => ({
  category,
  syntax,
  description,
  slashSyntax: slash
    ? syntax.startsWith("-weao ")
      ? `/weao ${syntax.split(" ")[1]}`
      : `/${syntax.slice(1).split(" ")[0]}`
    : "",
  alias: false,
}));

for (const [syntax, description, category] of additionalCommands) {
  commands.push({ category, syntax, description, slashSyntax: "", alias: true });
}

for (const [shortcut, target] of shortCuts) {
  const targetCommand = commands.find((command) => command.syntax.startsWith(`${target} `) || command.syntax === target);
  const category = targetCommand?.category ?? "Bot & Moderation";
  commands.push({
    category,
    syntax: shortcut,
    description: `Shortcut for ${target}.`,
    slashSyntax: "",
    alias: true,
  });
}

const searchInput = document.querySelector("#command-search");
const categoryFilter = document.querySelector("#category-filter");
const commandList = document.querySelector("#command-list");
const resultsCount = document.querySelector("#results-count");
const emptyState = document.querySelector("#empty-state");
const externalLinkDialog = document.querySelector("#external-link-dialog");
const externalLinkUrl = document.querySelector("#external-link-url");
const trustDomain = document.querySelector("#trust-domain");
const trustDomainName = document.querySelector("#trust-domain-name");
const dialogBackButton = document.querySelector(".dialog-back");
const dialogContinueButton = document.querySelector(".dialog-continue");
const dialogCloseButton = document.querySelector(".dialog-close");
const tabButtons = [...document.querySelectorAll("[data-tab]")];
const tabPanels = [...document.querySelectorAll('[role="tabpanel"]')];
let pendingExternalUrl = null;
let lastFocusedElement = null;

function activateTab(tabId, updateHistory = false, moveFocus = false) {
  const selectedButton = tabButtons.find((button) => button.dataset.tab === tabId);
  if (!selectedButton) {
    return;
  }

  for (const button of tabButtons) {
    const selected = button === selectedButton;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
  }

  for (const panel of tabPanels) {
    panel.hidden = panel.id !== tabId;
  }

  if (updateHistory && window.location.hash !== `#${tabId}`) {
    window.history.pushState(null, "", `#${tabId}`);
  }
  if (moveFocus) {
    selectedButton.focus();
  }
  window.scrollTo(0, 0);
}

for (const [index, button] of tabButtons.entries()) {
  button.addEventListener("click", () => activateTab(button.dataset.tab, true));
  button.addEventListener("keydown", (event) => {
    let nextIndex = index;
    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % tabButtons.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabButtons.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    activateTab(tabButtons[nextIndex].dataset.tab, true, true);
  });
}

function activateTabFromLocation() {
  activateTab(window.location.hash.slice(1) || "guidelines");
}

window.addEventListener("popstate", activateTabFromLocation);
window.addEventListener("hashchange", activateTabFromLocation);

activateTabFromLocation();

const categories = [...new Set(commands.map((command) => command.category))].sort();
for (const category of categories) {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoryFilter.append(option);
}

function renderCommands() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const matchingCommands = commands.filter((command) => {
    const matchesCategory = selectedCategory === "all" || command.category === selectedCategory;
    const searchable = `${command.syntax} ${command.slashSyntax} ${command.description} ${command.category}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });

  commandList.replaceChildren();
  for (const command of matchingCommands) {
    const card = document.createElement("article");
    card.className = "command-card";

    const top = document.createElement("div");
    top.className = "command-card-top";

    const name = document.createElement("code");
    name.className = "command-name";
    name.textContent = command.syntax;

    const badges = document.createElement("span");
    badges.className = "command-badges";
    const categoryBadge = document.createElement("span");
    categoryBadge.className = "badge";
    categoryBadge.textContent = command.category;
    badges.append(categoryBadge);
    if (command.slashSyntax) {
      const slashBadge = document.createElement("span");
      slashBadge.className = "badge";
      slashBadge.textContent = "SLASH";
      badges.append(slashBadge);
    }
    if (command.alias) {
      const aliasBadge = document.createElement("span");
      aliasBadge.className = "badge alias";
      aliasBadge.textContent = "ALIAS";
      badges.append(aliasBadge);
    }
    top.append(name, badges);

    const description = document.createElement("p");
    description.className = "command-description";
    description.textContent = command.description;
    card.append(top, description);
    if (command.slashSyntax) {
      const slashUsage = document.createElement("p");
      slashUsage.className = "command-aliases";
      slashUsage.append("Slash: ");
      const slashName = document.createElement("code");
      slashName.textContent = command.slashSyntax;
      slashUsage.append(slashName);
      card.append(slashUsage);
    }
    commandList.append(card);
  }

  resultsCount.textContent = `${matchingCommands.length} ${matchingCommands.length === 1 ? "command" : "commands"}`;
  emptyState.hidden = matchingCommands.length > 0;
  commandList.hidden = matchingCommands.length === 0;
}

searchInput.addEventListener("input", renderCommands);
categoryFilter.addEventListener("change", renderCommands);
document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }

  const destination = new URL(link.href, window.location.href);
  if (destination.protocol !== "https:" || destination.origin === window.location.origin) {
    return;
  }

  if (sessionStorage.getItem("trusted-external-origin") === destination.origin) {
    return;
  }

  event.preventDefault();
  pendingExternalUrl = destination.href;
  lastFocusedElement = link;
  externalLinkUrl.textContent = destination.href;
  trustDomainName.textContent = destination.hostname;
  trustDomain.checked = false;
  externalLinkDialog.showModal();
  dialogBackButton.focus();
});

function closeExternalLinkDialog() {
  if (externalLinkDialog.open) {
    externalLinkDialog.close();
  }
}

dialogBackButton.addEventListener("click", closeExternalLinkDialog);
dialogCloseButton.addEventListener("click", closeExternalLinkDialog);
externalLinkDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeExternalLinkDialog();
});
externalLinkDialog.addEventListener("close", () => {
  pendingExternalUrl = null;
  lastFocusedElement?.focus();
});
dialogContinueButton.addEventListener("click", () => {
  if (!pendingExternalUrl) {
    return;
  }

  const destination = new URL(pendingExternalUrl);
  if (trustDomain.checked) {
    sessionStorage.setItem("trusted-external-origin", destination.origin);
  }
  window.location.assign(destination.href);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    renderCommands();
    searchInput.blur();
  }
});

renderCommands();
