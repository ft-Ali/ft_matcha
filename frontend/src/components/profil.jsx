import React from 'react';

function Profile() {
    return (
    <div className="desktop-container">
        <div class="top-nav">
            <button class="nav-btn">←</button>
            <button class="nav-btn">⚙️</button>
        </div>
        <div class="profile-image-section">
            {/* <img src="/placeholder.svg?height=700&width=500" alt="Photo de profil" class="profile-image"> */}
            <div class="online-indicator">🟢 En ligne</div>
            <div class="profile-overlay">
                <div class="profile-name">Emma, 28</div>
                <div class="profile-description">
                    Passionnée d'animaux et de nature, toujours prête pour de nouvelles aventures avec mes compagnons à quatre pattes ! 🐕🌿
                </div>
            </div>
        </div>

        <div class="profile-details">
            <div class="details-content">
                <div class="section-title">
                    <span class="section-icon">👤</span>
                    Informations
                </div>
                
                <div class="info-grid">
                    <div class="info-card">
                        <div class="info-label">Genre</div>
                        <div class="info-value">Femme</div>
                    </div>
                    <div class="info-card">
                        <div class="info-label">Attirée par</div>
                        <div class="info-value">Hommes</div>
                    </div>
                    <div class="info-card">
                        <div class="info-label">📍 Localisation</div>
                        <div class="info-value">Paris, 5km</div>
                    </div>
                    <div class="info-card">
                        <div class="info-label">💼 Métier</div>
                        <div class="info-value">Vétérinaire</div>
                    </div>
                </div>

                <div class="bio-section">
                    <div class="bio-title">À propos de moi</div>
                    <div class="bio-text">
                        J'adore passer du temps en plein air avec mes animaux. Passionnée de randonnée, de photographie animalière et de voyages. Je cherche quelqu'un qui partage ma passion pour les animaux et qui aime l'aventure ! J'aime aussi cuisiner des plats végétariens et pratiquer le yoga au coucher du soleil.
                    </div>
                </div>

                <div class="interests-section">
                    <div class="bio-title">Centres d'intérêt</div>
                    <div class="interests">
                        <span class="interest-tag">#Randonnée</span>
                        <span class="interest-tag">#Photographie</span>
                        <span class="interest-tag">#Voyage</span>
                        <span class="interest-tag">#Cuisine</span>
                        <span class="interest-tag">#Yoga</span>
                        <span class="interest-tag">#Lecture</span>
                        <span class="interest-tag">#Nature</span>
                        <span class="interest-tag">#Vélo</span>
                    </div>
                </div>

                <div class="pet-info">
                    <div class="pet-title">🐾 Mes compagnons</div>
                    <div class="pet-types">
                        <span class="pet-type">🐕 Chien (Golden Retriever)</span>
                        <span class="pet-type">🐱 Chat (Maine Coon)</span>
                    </div>
                </div>
            </div>

            <div class="action-section">
                <div class="action-buttons">
                    <button class="btn btn-pass">👎 Passer</button>
                    <button class="btn btn-message">💬 Message</button>
                    <button class="btn btn-like">❤️ J'aime</button>
                </div>
            </div>
        </div>
    </div>


    );
}
export default Profile;
