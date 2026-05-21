let audioMapping = {}
let store = {}

module.exports = {
    title: "Voice Over Nexus Fandub",
    author: "zenny",
    summary: "Implements the Voice Over Nexus fandub.",
    description: "Automatically plays the Voice Over Nexus fandub audio of each page. Audio settings can be found in the UHC mod manager. This dub is neither mine, nor is it complete.",
    modVersion: 1,

    settings: {
        boolean: [{
            model: "autoplay",
            label: "Autoplay",
            desc: "Automatically play fandub audio when a page loads."
        }],
        radio: [{
            model: "volume",
            label: "Default Volume",
            desc: "The default volume for fandub audio.",
            options: [
                { value: "10", label: "10%" },
                { value: "20", label: "20%" },
                { value: "30", label: "30%" },
                { value: "40", label: "40%" },
                { value: "50", label: "50%" },
                { value: "60", label: "60%" },
                { value: "70", label: "70%" },
                { value: "80", label: "80%" },
                { value: "90", label: "90%" },
                { value: "100", label: "100%" }
            ]
        }]
    },

    computed(api) {
        audioMapping = api.readJson("./mapping.json")
        store = api.store
        api.store.set("autoplay", api.store.get("autoplay", true))
        api.store.set("volume", api.store.get("volume", "70"))
    },

    routes: {},

    edit(archive) {
        const autoplay = store.get("autoplay", true) ? "autoplay" : ""
        const volume = (parseInt(store.get("volume", "70")) / 100).toFixed(2)

        for (const pageNum in audioMapping) {
            const page = archive.mspa.story[pageNum]
            if (!page) continue

            const audioFile = audioMapping[pageNum]
            const assetPath = `assets://mods/vonexus-fandub/${audioFile}`

            module.exports.routes[assetPath] = `./${audioFile}`

            const audioTag = `<audio class="von-player" controls ${autoplay} src="${assetPath}" oncanplay="this.volume=${volume};"></audio>`

            page.content = page.content + audioTag
        }
    },

    styles: [
        { source: "./style.css" }
    ],
}